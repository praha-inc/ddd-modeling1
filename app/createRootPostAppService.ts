import { RootPost } from "../domain/root-post/entity/root-post";
import { Status } from "../domain/root-post/valueObject/status";
import { randomId } from "../id";
import RootPostRepoImpl from "../infra/rootPostRepoImpl";
import RootTag from "../domain/rootTag";
import RootTagRepoImpl from "../infra/rootTagRepoImpl";

export class CreateRootPostAppService {
  private readonly postRepo: RootPostRepoImpl; // 本当はinterfaceにするべき
  private readonly tagRepo: RootTagRepoImpl; // 本当はinterfaceにするべき

  constructor(postRepo: RootPostRepoImpl, tagRepo: RootTagRepoImpl) {
    this.postRepo = postRepo;
    this.tagRepo = tagRepo;
  }

  public async do(
    content: string,
    status: Status,
    teamId: string,
    userId: string,
    tagContents: string[]
  ) {
    const newPostId = "newPost";

    const rootTags = this.addPostToRootTags(tagContents, newPostId);
    const rootPost = new RootPost({
      id: randomId(),
      content,
      status,
      teamId,
      userId,
      tagIds: rootTags.map((rootTag) => rootTag.tag.id),
    });
    await this.tagRepo.saveAll(rootTags);
    await this.postRepo.save(rootPost);
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
}
