import RootPostRepoImpl from "../../infra/rootPostRepoImpl";
import RootTagRepoImpl from "../../infra/rootTagRepoImpl";
import { RootPost } from "./entity/root-post";
import RootTag from "../rootTag";

export class RootPostDomainService {
  private readonly postRepo: RootPostRepoImpl; // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl; // 本当はinterfaceにするべき

  constructor(postRepo: RootPostRepoImpl, tagRepo: RootTagRepoImpl) {
    this.postRepo = postRepo;
    this.tagRepo = tagRepo;
<<<<<<< HEAD
=======
    this.teamRepo = teamRepo;
  }

  private addPostToRootTags(contents: string[], newPostId: string) {
    let rootTags: RootTag[] = [];

    for (const content of contents) {
      let newRootTag;
      const rootTag = this.tagRepo.findTagByContent(content);

      if (rootTag) {
        newRootTag = this.addPostToExistingRootTag(rootTag, newPostId);
      } else {
        newRootTag = this.createNewRootTag(content, newPostId);
      }
      rootTags.push(newRootTag);
    }

    return rootTags;
  }

  private addPostToExistingRootTag(rootTag: RootTag, newPostId: string) {
    return new RootTag(rootTag.tag.content, [...rootTag.postIds, newPostId]);
  }
  private createNewRootTag(newTagContent: string, newPostId: string) {
    return new RootTag(newTagContent, [newPostId]);
  }

  public async createRootPost(
    content: string,
    tagContents: string[],
    status: Status,
    teamId: string,
    userId: string,
    createdAt: string
  ) {
    const newPostId = randomId();
    const rootTags = this.addPostToRootTags(tagContents, newPostId);
    const rootPost = new RootPost({
      id: newPostId,
      content,
      tagIds: rootTags.map((rootTag) => rootTag.tag.id),
      status,
      teamId,
      userId,
      createdAt,
    });
    await this.tagRepo.saveAll(rootTags);

    const team = await this.teamRepo.find(teamId);
    if (!team.isPaid()) {
      throw Error("This team has not paid!");
    }
    await this.postRepo.save(rootPost);
>>>>>>> master
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
