import { RootPost } from "../../../domain/root-post/entity/root-post";
import { RootPostRepository } from "../../../domain/root-post/repository/root-post-repository";

export class OneDayRemoveRootPostUsecase {
  private readonly rootPostRepo: RootPostRepository;

  public constructor(rootPostRepo: RootPostRepository) {
    this.rootPostRepo = rootPostRepo;
  }

  public async do(date: string) {
    // TODO: 1日以上経ったものを取得するか、this.rootPostRepo.delete に条件を投げる
    const foo = "" as any;

    return await this.rootPostRepo.deleteByCreatedAt(foo);
  }
}
