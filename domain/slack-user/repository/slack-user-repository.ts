
  import { SlackUser } from '../entity/slack-user'

  export interface SlackUserRepository {
    index(): Promise<SlackUser[]>;
    find(id: string): Promise<SlackUser>;
    delete(id: string): Promise<void>;
    update(slackUser: SlackUser): Promise<SlackUser>;
  }
  