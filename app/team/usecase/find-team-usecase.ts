
  import { Team } from '../../../domain/team/entity/team'
  import { TeamRepository } from '../../../domain/team/repository/team-repository'
  import { TeamDTO } from '../dto/team-dto'

  export class FindTeamUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
      this.teamRepo = teamRepo
    }

    public async do(id: string) {
      const team: Team = await this.teamRepo.find(id)
      if (!team) return undefined

      return new TeamDTO(team)
    }
  }
  