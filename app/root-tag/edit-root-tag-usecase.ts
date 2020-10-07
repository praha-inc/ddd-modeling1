import RootTagRepoImpl from "../../infra/root-tag-repository-impl"
import RootTag from "../../domain/root-tag/entity/root-tag"

export class EditTagAppService {
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき

  constructor(tagRepo: RootTagRepoImpl) {
    this.tagRepo = tagRepo
  }
  public async do(previousContent: string, newContent: string) {
    const existingTag = this.tagRepo.findTagByContent(previousContent)
    const updatedTag = new RootTag(newContent, existingTag.postIds) // fixme: これだとtagのidが変わっちゃうので、idはappServiceで指定できるようにする
    await this.tagRepo.save(updatedTag)
  }
}
