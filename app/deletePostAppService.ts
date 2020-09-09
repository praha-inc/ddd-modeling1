import RootPostRepoImpl from "../infra/rootPostRepoImpl"
import { RootPostDomainService } from "../domain/root-post/rootPostDomainService"

export class DeletePostAppService {
  private readonly postRepo: RootPostRepoImpl // 本当はinterfaceにするべき
  private readonly domainService: RootPostDomainService

  constructor(postRepo: RootPostRepoImpl, rootPostDomainService: RootPostDomainService) {
    this.postRepo = postRepo
    this.domainService = rootPostDomainService
  }

  public async do(postId: string) {
    const rootPost = await this.postRepo.find(postId)
    await this.domainService.deleteRootPost(rootPost)
  }
}
