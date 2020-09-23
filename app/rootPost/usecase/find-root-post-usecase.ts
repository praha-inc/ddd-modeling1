import { RootPost } from "../../../domain/root-post/entity/root-post";
import { RootPostRepository } from "../../../domain/root-post/repository/root-post-repository";
import { RootPostDTO } from "../dto/root-post-dto";

export class FindRootPostUsecase {
  private readonly rootPostRepo: RootPostRepository;

  public constructor(rootPostRepo: RootPostRepository) {
    this.rootPostRepo = rootPostRepo;
  }

  public async do(id: string, teamId?: number, userId?: number) {
    const rootPost: RootPost = await this.rootPostRepo.find(id, teamId, userId);
    if (!rootPost) return undefined;

    return new RootPostDTO(rootPost);
  }
}
