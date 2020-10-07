import RootPostRepoImpl from "../../../infra/root-post-repository-impl"
import { RootPostDomainService } from "../../../domain/root-post/root-post-domain-service"

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
