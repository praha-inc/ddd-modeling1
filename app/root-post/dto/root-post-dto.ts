import { RootPost } from "../../../domain/root-post/entity/root-post";
import type { Status } from "../../../domain/root-post/value-object/status";

export class RootPostDTO {
  public readonly id: string;
  public readonly content: string;
  public readonly status: Status;
  public readonly teamId: string;
  public readonly userId: string;

  public constructor(rootPost: RootPost) {
    this.id = rootPost.post.id;
    this.content = rootPost.post.content;
    this.status = rootPost.post.status;
    this.teamId = rootPost.post.teamId;
    this.userId = rootPost.post.userId;
  }
}
