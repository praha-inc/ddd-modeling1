import { RootPost } from "../domain/root-post/rootPost";
import { randomId } from "../id";
import RootPostRepoImpl from "../infra/rootPostRepoImpl";
import RootTag from "../domain/rootTag";
import RootTagRepoImpl from "../infra/rootTagRepoImpl";
import { RootPostDomainService } from "../domain/root-post/rootPostDomainService"
import { TeamRepository } from "../domain/team/repository/team-repository"

export class CreateRootPostAppService {
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき
  private readonly rootPostDomainService: RootPostDomainService

  constructor(tagRepo: RootTagRepoImpl, rootPostDomainService: RootPostDomainService) {
    this.tagRepo = tagRepo
    this.rootPostDomainService = rootPostDomainService
  }

  public async do(content: string, tagContents: string[], teamId: string) {
    const newPostId = 'newPost'

    const rootTags = this.addPostToRootTags(tagContents, newPostId)
    const rootPost = new RootPost({id: randomId(), content, tagIds: rootTags.map((rootTag) => rootTag.tag.id)})
    await this.tagRepo.saveAll(rootTags)
    await this.rootPostDomainService.createRootPost(rootPost, teamId)
  }

  private addPostToRootTags(contents: string[], newPostId: string) {
    let rootTags: RootTag[] = []

    for (const content of contents) {
      let newRootTag
      const rootTag = this.tagRepo.findTagByContent(content)

      if (rootTag) {
        newRootTag = this.addPostToExistingRootTag(rootTag, newPostId)
      } else {
        newRootTag = this.createNewRootTag(content, newPostId)
      }
      rootTags.push(newRootTag)
    }

    return rootTags
  }

  private addPostToExistingRootTag(rootTag: RootTag, newPostId: string) {
    return new RootTag(rootTag.tag.content, [...rootTag.postIds, newPostId])
  }
  private createNewRootTag(newTagContent:string, newPostId: string) {
    return new RootTag(newTagContent, [newPostId])
  }
}
