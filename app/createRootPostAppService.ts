
import RootTagRepoImpl from "../infra/rootTagRepoImpl";
import { RootPostDomainService } from "../domain/root-post/rootPostDomainService"

export class CreateRootPostAppService {
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき
  private readonly rootPostDomainService: RootPostDomainService

  constructor(tagRepo: RootTagRepoImpl, rootPostDomainService: RootPostDomainService) {
    this.tagRepo = tagRepo
    this.rootPostDomainService = rootPostDomainService
  }

  public async do(content: string, tagContents: string[], teamId: string) {
    await this.rootPostDomainService.createRootPost(content, tagContents, teamId)
  }
}
