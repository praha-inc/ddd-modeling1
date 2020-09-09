import { ClerkUserDomainService } from '../../../domain/clerk-user/clerk-user-domain-service'

export class DeleteClerkUserUsecase {
  private readonly clerkUserDS: ClerkUserDomainService

  public constructor(clerkUserDS: ClerkUserDomainService) {
    this.clerkUserDS = clerkUserDS
  }

  public async do(id: string) {
    try {
      await this.clerkUserDS.deleteUser(id)
    } catch (error) {
      // todo: error handling
      console.error(error)
    }
  }
}
