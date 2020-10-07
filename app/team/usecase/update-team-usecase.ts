
  import { Team } from '../../../domain/team/entity/team'
  import { TeamRepository } from '../../../domain/team/repository/team-repository'
  import { TeamDTO } from '../dto/team-dto'

  export class UpdateTeamUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
      this.teamRepo = teamRepo
    }

    public async do(id: string) {
      try {
        const team: Team = await this.teamRepo.find(id)
        if (!team) return undefined

        const updatedTeam = new Team({ id: team.getId(), clerkUserIds: team.getClerkUserIds(), teamBills: team.getTeamBills() })
        const persistedTeam = await this.teamRepo.update(updatedTeam)
        return new TeamDTO(persistedTeam)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  