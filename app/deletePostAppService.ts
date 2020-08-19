import RootTagRepoImpl from "../infra/rootTagRepoImpl"
import RootPostRepoImpl from "../infra/rootPostRepoImpl"
import RootTag from "../domain/rootTag"

export class DeletePostAppService {
  private readonly postRepo: RootPostRepoImpl // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき

  constructor(postRepo: RootPostRepoImpl, tagRepo: RootTagRepoImpl) {
    this.postRepo = postRepo
    this.tagRepo = tagRepo
  }

  public async do(postId: string) {
    const rootPost = await this.postRepo.find(postId)
    const rootTags = await this.tagRepo.findByPostId(postId)

    // ask: もし「postが一件も紐づいていないタグがあったら自動消去する」みたいなルールがあったら、rootTagのドメインルールに抵触しないことを確認する必要がある
    // ただ、これだとrootPostを削除する時に、rootTagのドメインルールが関わることを知っていなければいけない
    // どうしよう....
    const newRootTags = rootTags.map((rootTag) => {
      const newPostIds = this.remove(rootTag.postIds, postId)
      return new RootTag(rootTag.tag.content, newPostIds)
    })

    await this.tagRepo.saveAll(newRootTags)
    await this.postRepo.delete(rootPost)
  }

  private remove(array: string[], element: string) {
    // 実際はelementをarrayから削除する
    return array
  }
}
