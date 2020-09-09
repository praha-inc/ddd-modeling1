import RootPostRepoImpl from "../../infra/rootPostRepoImpl"
import RootTagRepoImpl from "../../infra/rootTagRepoImpl"
import { RootPost } from "./rootPost"
import RootTag from "../rootTag"
import { TeamRepository } from "../team/repository/team-repository"

export class RootPostDomainService {
  private readonly postRepo: RootPostRepoImpl // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき
  private readonly teamRepo: TeamRepository

  constructor(postRepo: RootPostRepoImpl, tagRepo: RootTagRepoImpl, teamRepo: TeamRepository) {
    this.postRepo = postRepo
    this.tagRepo = tagRepo
    this.teamRepo = teamRepo
  }

  public async createRootPost(rootPost: RootPost, teamId: string) {
    const team = await this.teamRepo.find(teamId)
    if (!team.isPaid()) {
      throw Error("This team has not paid!")
    }
    await this.postRepo.save(rootPost)
  }

  public async deleteRootPost(rootPost: RootPost) {
    const rootTags = await this.tagRepo.findByPostId(rootPost.post.id)
    const newRootTags = rootTags.map((rootTag) => {
      const newPostIds = this.remove(rootTag.postIds, rootPost.post.id)
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
