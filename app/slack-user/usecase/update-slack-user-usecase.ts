
  import { SlackUser } from '../../../domain/slack-user/entity/slack-user'
  import { SlackUserRepository } from '../../../domain/slack-user/repository/slack-user-repository'
  import { SlackUserDTO } from '../dto/slack-user-dto'

  export class UpdateSlackUserUsecase {
    private readonly slackUserRepo: SlackUserRepository

    public constructor(slackUserRepo: SlackUserRepository) {
      this.slackUserRepo = slackUserRepo
    }

    public async do(id: string) {
      try {
        const slackUser: SlackUser = await this.slackUserRepo.find(id)
        if (!slackUser) return undefined

        const updatedSlackUser = new SlackUser({...slackUser})
        const persistedSlackUser = await this.slackUserRepo.update(updatedSlackUser)
        return new SlackUserDTO(persistedSlackUser)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  