import { RootPost } from "../domain/root-post/entity/root-post";
import { RootPostFactory } from "../domain/root-post/factory/rootPostFactory";
import { Status } from "../domain/root-post/valueObject/status";

type Connection = {
};

export class RootPostFactoryImpl implements RootPostFactory {
  private readonly conn: Connection;
  constructor(conn: Connection) {
    this.conn = conn;
  }

  public createRootPost(params: {
    id: string;
    content: string;
    status: Status;
    teamId: string;
    userId: string;
    tagIds: string[];
  }) {
    const { id, content, status, teamId, userId, tagIds } = params

    // memo: 本来はここでuserIdからユーザを取得して、ユーザ状態がadminか否か確認する
    const userFromDB = {isAdmin: true}

    return new Promise<RootPost>((resolve) => {
      resolve(new RootPost({
        id,
        content,
        status,
        teamId,
        userId,
        tagIds,
        isCreatingUserAdmin: userFromDB.isAdmin
      }))
    })
  }
}