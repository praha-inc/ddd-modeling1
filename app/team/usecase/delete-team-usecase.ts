
  import { TeamRepository } from '../../../domain/team/repository/team-repository'

  export class DeleteTeamUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
      this.teamRepo = teamRepo
    }

    public async do(id: string) {
      try {
        await this.teamRepo.delete(id)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  