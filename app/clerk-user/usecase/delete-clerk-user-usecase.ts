
  import { ClerkUserRepository } from '../../../domain/clerk-user/repository/clerk-user-repository'

  export class DeleteClerkUserUsecase {
    private readonly clerkUserRepo: ClerkUserRepository

    public constructor(clerkUserRepo: ClerkUserRepository) {
      this.clerkUserRepo = clerkUserRepo
    }

    public async do(id: string) {
      try {
        await this.clerkUserRepo.delete(id)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  