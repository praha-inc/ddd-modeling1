import { Status } from "../../../domain/root-post/valueObject/status";
import RootPostRepoImpl from "../../../infra/root-post-repository-impl";
import RootTagRepoImpl from "../../../infra/root-tag-repository-impl";
import { RootPostFactory } from "../../../domain/root-post/factory/root-post-factory";

export class CreateRootPostAppService {
  private readonly postRepo: RootPostRepoImpl; // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl; // 本当はinterfaceにするべき
  private readonly postFactory: RootPostFactory;

  constructor(
    postRepo: RootPostRepoImpl,
    tagRepo: RootTagRepoImpl,
    postFactory: RootPostFactory
  ) {
    this.postRepo = postRepo;
    this.tagRepo = tagRepo;
    this.postFactory = postFactory;
  }

  public async do(
    content: string,
    status: Status,
    teamId: string,
    userId: string,
    tagContents: string[],
    createdAt: string
  ) {
    const { rootPost, rootTags } = await this.postFactory.createRootPost({
      content,
      status,
      teamId,
      userId,
      tagContents,
      createdAt,
    });
    await this.tagRepo.saveAll(rootTags);
    await this.postRepo.save(rootPost);
  }
}
