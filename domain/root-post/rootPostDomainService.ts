import RootPostRepoImpl from "../../infra/rootPostRepoImpl";
import RootTagRepoImpl from "../../infra/rootTagRepoImpl";
import { RootPost } from "./entity/root-post";
import RootTag from "../root-tag/entity/root-tag";

export class RootPostDomainService {
  private readonly postRepo: RootPostRepoImpl; // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl; // 本当はinterfaceにするべき

  constructor(postRepo: RootPostRepoImpl, tagRepo: RootTagRepoImpl) {
    this.postRepo = postRepo;
    this.tagRepo = tagRepo;
  }

  public async deleteRootPost(rootPost: RootPost) {
    const rootTags = await this.tagRepo.findByPostId(rootPost.post.id);
    const newRootTags = rootTags.map((rootTag) => {
      const newPostIds = this.remove(rootTag.postIds, rootPost.post.id);
      return new RootTag(rootTag.tag.content, newPostIds);
    });
    await this.tagRepo.saveAll(newRootTags);
    await this.postRepo.delete(rootPost);
  }

  private remove(array: string[], element: string) {
    // 実際はelementをarrayから削除する
    return array;
  }

  public async deleteRootPosts(criteria: { createdAt: string[] }) {
    const ids = await this.postRepo.findIds(criteria);
    await this.postRepo.deleteByIds(ids);
  }
}
