
  import { ClerkUser } from '../../../domain/clerk-user/entity/clerk-user'
  import { ClerkUserRepository } from '../../../domain/clerk-user/repository/clerk-user-repository'
  import { ClerkUserDTO } from '../dto/clerk-user-dto'

  export class FindClerkUserUsecase {
    private readonly clerkUserRepo: ClerkUserRepository

    public constructor(clerkUserRepo: ClerkUserRepository) {
      this.clerkUserRepo = clerkUserRepo
    }

    public async do(id: string) {
      const clerkUser: ClerkUser = await this.clerkUserRepo.find(id)
      if (!clerkUser) return undefined

      return new ClerkUserDTO(clerkUser)
    }
  }
  