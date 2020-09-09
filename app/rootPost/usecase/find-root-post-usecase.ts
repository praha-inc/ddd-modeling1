import { SlackUser } from "../../../domain/slack-user/entity/slack-user";
import { SlackUserRepository } from "../../../domain/slack-user/repository/slack-user-repository";
import { SlackUserDTO } from "../dto/slack-user-dto";

export class FindSlackUserUsecase {
  private readonly slackUserRepo: SlackUserRepository;

  public constructor(slackUserRepo: SlackUserRepository) {
    this.slackUserRepo = slackUserRepo;
  }

  public async do(id: string) {
    const slackUser: SlackUser = await this.slackUserRepo.find(id);
    if (!slackUser) return undefined;

    return new SlackUserDTO(slackUser);
  }
}
