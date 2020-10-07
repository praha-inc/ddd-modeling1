import { ClerkUser } from "../domain/clerk-user/entity/clerk-user";
import { randomId } from "../id";

type Connection = {
  find: (id: string) => {};
};

export default class ClerkUserRepoImpl {
  private readonly conn: Connection;
  constructor(conn: Connection) {
    this.conn = conn;
  }

  public async create(teamId: string) {
    // DB読み込み
    return new ClerkUser({
      id: randomId(),
      teamId,
    });
  }
}
