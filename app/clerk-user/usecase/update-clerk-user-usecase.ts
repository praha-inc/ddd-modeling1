
  import { ClerkUser } from '../../../domain/clerk-user/entity/clerk-user'
  import { ClerkUserRepository } from '../../../domain/clerk-user/repository/clerk-user-repository'
  import { ClerkUserDTO } from '../dto/clerk-user-dto'

  export class UpdateClerkUserUsecase {
    private readonly clerkUserRepo: ClerkUserRepository

    public constructor(clerkUserRepo: ClerkUserRepository) {
      this.clerkUserRepo = clerkUserRepo
    }

    public async do(id: string) {
      try {
        const clerkUser: ClerkUser = await this.clerkUserRepo.find(id)
        if (!clerkUser) return undefined

        const updatedClerkUser = new ClerkUser({...clerkUser})
        const persistedClerkUser = await this.clerkUserRepo.update(updatedClerkUser)
        return new ClerkUserDTO(persistedClerkUser)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  