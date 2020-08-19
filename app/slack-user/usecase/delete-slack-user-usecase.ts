
  import { SlackUserRepository } from '../../../domain/slack-user/repository/slack-user-repository'

  export class DeleteSlackUserUsecase {
    private readonly slackUserRepo: SlackUserRepository

    public constructor(slackUserRepo: SlackUserRepository) {
      this.slackUserRepo = slackUserRepo
    }

    public async do(id: string) {
      try {
        await this.slackUserRepo.delete(id)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  