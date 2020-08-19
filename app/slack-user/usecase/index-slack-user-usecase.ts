
  import { SlackUser } from '../../../domain/slack-user/entity/slack-user'
  import { SlackUserRepository } from '../../../domain/slack-user/repository/slack-user-repository'
  import { SlackUserDTO } from '../dto/slack-user-dto'

  export class IndexSlackUserUsecase {
    private readonly slackUserRepo: SlackUserRepository

    public constructor(slackUserRepo: SlackUserRepository) {
      this.slackUserRepo = slackUserRepo
    }

    public async do() {
      const slackUserList = await this.slackUserRepo.index()
      return slackUserList.map((slackUser: SlackUser) => {
        return new SlackUserDTO(slackUser)
      })
    }
  }
  