
  import { Team } from '../../../domain/team/entity/team'
  import { TeamRepository } from '../../../domain/team/repository/team-repository'
  import { TeamDTO } from '../dto/team-dto'

  export class IndexTeamUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
      this.teamRepo = teamRepo
    }

    public async do() {
      const teamList = await this.teamRepo.index()
      return teamList.map((team: Team) => {
        return new TeamDTO(team)
      })
    }
  }
  