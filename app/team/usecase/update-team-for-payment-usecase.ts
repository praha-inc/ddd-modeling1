import { Team } from '../../../domain/team/entity/team'
import { TeamRepository } from '../../../domain/team/repository/team-repository'

export class UpdateTeamForPaymentUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
        this.teamRepo = teamRepo
    }

    public async do() {
        try {
            const teams: Team[] = await this.teamRepo.index()
            for (const team of teams) {
                if (team.isPaymentRequired()) {
                    const updatedTeam = new Team({ id: team.getId(), clerkUserIds: team.getClerkUserIds(), paid: false })
                    await this.teamRepo.update(updatedTeam)
                }
            }
            return true
        } catch (error) {
            // todo: error handling
            console.error(error)
        }
    }
}
