import { TeamRepository } from "../team/repository/team-repository";
import { ClerkUserRepository } from "./repository/clerk-user-repository";
import { Team } from "../team/entity/team";

export class ClerkUserDomainService {
  private readonly teamRepo: TeamRepository
  private readonly userRepo: ClerkUserRepository
  public constructor(teamrepo: TeamRepository, userRepo: ClerkUserRepository) {
    this.teamRepo = teamrepo
    this.userRepo = userRepo
  }
  public async deleteUser(userId: string) {
    const user = await this.userRepo.find(userId)
    const team = await this.teamRepo.find(user.teamId)
    const updatedTeam = this.removeUserFromTeam(team, userId)
    await this.teamRepo.update(updatedTeam)
    await this.userRepo.delete(user.id)
  }

  private removeUserFromTeam(team: Team, userId: string) {
    return new Team({...team}) // memo: この時、teamからuserIdをfindIndexして削除するイメージ。面倒なので省略
  } 
}