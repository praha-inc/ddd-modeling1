import { Team } from '../../../domain/team/entity/team'
import { TeamRepository } from '../../../domain/team/repository/team-repository'

export class CreateTeamBillUsecase {
    private readonly teamRepo: TeamRepository

    public constructor(teamRepo: TeamRepository) {
        this.teamRepo = teamRepo
    }

    public async do() {
        try {
            const teams: Team[] = await this.teamRepo.index()
            const updatedTeams: Team[] = []
            for (const team of teams) {
                if (team.isPaymentRequired()) {
                    team.addTeamBill({ paymentRequiredDate: new Date(), fee: 10000 })
                    updatedTeams.push(new Team({ id: team.getId(), clerkUserIds: team.getClerkUserIds(), TeamBills: team.getTeamBills() }))
                }
            }
            this.teamRepo.bulkUpdate(updatedTeams)
            return true
        } catch (error) {
            // todo: error handling
            console.error(error)
        }
    }
}
