import { Team }  from "../domain/team/entity/team"

type Connection = {
    find: (id: string) => {}
  }

export default class TeamRepoImpl {
    private readonly conn: Connection
    constructor(conn: Connection) {
        this.conn = conn
    }

    public async find(id: string) {
      // DB読み込み
      return new Team({
        id: 'existingTeamId', paid: true
      })
    }
}
