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

    public async update(team: Team) {
      // DB書き込み
      console.info(team)
      return true
    }
    public async bulkUpdate(teams: Team[]) {
      // DB書き込み
      console.info(teams)
      return teams
    }
}
