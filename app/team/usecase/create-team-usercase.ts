  import { Team } from '../../../domain/team/entity/team'
  import { TeamRepository } from '../../../domain/team/repository/team-repository'
  import { TeamDTO } from '../dto/team-dto'

  export class CreateTeamUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
      this.teamRepo = teamRepo
    }

    public async do(id: string, newUserId: string) {
      try {
        const newTeam: Team = new Team({id, clerkUserIds: [newUserId], teamBills: [] })
        const persistedTeam = await this.teamRepo.create(newTeam)
        return new TeamDTO(persistedTeam)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  