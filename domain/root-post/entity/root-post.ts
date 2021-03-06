import { Status } from "../value-object/status";

class Post {
  public readonly id: string;
  public readonly content: string;
  public readonly status: Status;
  public readonly teamId: string;
  public readonly userId: string;
  public readonly createdAt: string;

  constructor(
    id: string,
    content: string,
    status: Status,
    teamId: string,
    userId: string,
    createdAt: string
  ) {
    this.id = id;
    this.content = content;
    this.status = status;
    this.teamId = teamId;
    this.userId = userId;
    this.createdAt = createdAt;

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
    createdAt: string;
  }) {
    const {
      id,
      content,
      status,
      teamId,
      userId,
      tagIds,
      isCreatingUserAdmin,
      createdAt,
    } = params;
    this.post = new Post(id, content, status, teamId, userId, createdAt);
    this.tagIds = tagIds;

    if (this.tagIds.length > 5)
      throw new Error("一つのpost紐づけられるタグは5つまでです！");

    if (!isCreatingUserAdmin && status.status === "show")
      throw new Error("status showを選択できるのはadminだけです");
  }
}
