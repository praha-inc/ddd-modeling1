
  import {SlackUser} from '../../../domain/slack-user/entity/slack-user'
  export class SlackUserDTO {
    public readonly id: string
    public constructor(slackUser: SlackUser) {
      this.id = slackUser.id
    }
  }
  