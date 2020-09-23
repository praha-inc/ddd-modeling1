import { ClerkUserDomainService } from '../../../domain/clerk-user/clerk-user-domain-service'

export class DeleteClerkUserUsecase {
  private readonly clerkUserDS: ClerkUserDomainService

  public constructor(clerkUserDS: ClerkUserDomainService) {
    this.clerkUserDS = clerkUserDS
  }

  public async do(userId: string) {
    try {
      await this.clerkUserDS.deleteUser(userId)
    } catch (error) {
      // todo: error handling
      console.error(error)
    }
  }
}
