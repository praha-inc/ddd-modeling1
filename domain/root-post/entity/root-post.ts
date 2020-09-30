import { Status } from "../valueObject/status";

class Post {
  public readonly id: string;
  public readonly content: string;
  public readonly status: Status;
  public readonly teamId: string;
  public readonly userId: string;

  constructor(
    id: string,
    content: string,
    status: Status,
    teamId: string,
    userId: string
  ) {
    this.id = id;
    this.content = content;
    this.status = status;
    this.teamId = teamId;
    this.userId = userId;

    if (this.content.length > 300)
      throw new Error("postは300文字以内でお願いします！");
  }
}

// post集約
export class RootPost {
  public readonly post: Post;
  public readonly tagIds: string[];

  constructor(params: {
    id: string;
    content: string;
    status: Status;
    teamId: string;
    userId: string;
    tagIds: string[];
    isCreatingUserAdmin: boolean;
  }) {
    const {
      id,
      content,
      status,
      teamId,
      userId,
      tagIds,
      isCreatingUserAdmin,
    } = params;
    this.post = new Post(id, content, status, teamId, userId);
    this.tagIds = tagIds;

    if (this.tagIds.length > 5)
      throw new Error("一つのpost紐づけられるタグは5つまでです！");

    if (!isCreatingUserAdmin && status.status === "show")
      throw new Error("status showを選択できるのはadminだけです");
  }
}
