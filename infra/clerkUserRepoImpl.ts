import { ClerkUser } from "../domain/clerk-user/entity/clerk-user";

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
      id: "existingTeamId",
      teamId,
    });
  }
}
