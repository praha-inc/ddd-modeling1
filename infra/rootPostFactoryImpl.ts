import { RootPost } from "../domain/root-post/entity/root-post";
import { RootPostFactory } from "../domain/root-post/factory/rootPostFactory";
import { Status } from "../domain/root-post/valueObject/status";
import RootTag from "../domain/rootTag";
import { randomId } from "../id";
import RootTagRepoImpl from "./rootTagRepoImpl";
import UserRepoImpl from "./userRepoImpl";

export class RootPostFactoryImpl implements RootPostFactory {
  private readonly userRepo: UserRepoImpl; // fixme: interfaceにするべき
  private readonly tagRepo: RootTagRepoImpl; // fixme: interfaceにするべき
  constructor(userRepo: UserRepoImpl, tagRepo: RootTagRepoImpl) {
    this.userRepo = userRepo;
    this.tagRepo = tagRepo;
  }
  public createRootPost(params: {
    content: string;
    tagContents: string[];
    status: Status;
    teamId: string;
    userId: string;
  }) {
    const { content, tagContents, status, teamId, userId } = params;

    const userThatCreatedPost = this.userRepo.find(userId);
    const newPostId = randomId();
    const rootTags = this.addPostToRootTags(tagContents, newPostId);
    const tagIds = [this.tagRepo.findTagByContent(tagContents[0]).tag.id]; // memo: 本当はここでtagContentsから複数のtagIdsを取得する

    return {
      rootPost: new RootPost({
        id: newPostId,
        content,
        status,
        teamId,
        userId,
        tagIds,
        isCreatingUserAdmin: userThatCreatedPost.isAdmin,
      }),
      rootTags,
    };
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
