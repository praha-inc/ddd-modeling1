
  import { ClerkUser } from '../../../domain/clerk-user/entity/clerk-user'
  import { ClerkUserRepository } from '../../../domain/clerk-user/repository/clerk-user-repository'
  import { ClerkUserDTO } from '../dto/clerk-user-dto'

  export class IndexClerkUserUsecase {
    private readonly clerkUserRepo: ClerkUserRepository

    public constructor(clerkUserRepo: ClerkUserRepository) {
      this.clerkUserRepo = clerkUserRepo
    }

    public async do() {
      const clerkUserList = await this.clerkUserRepo.index()
      return clerkUserList.map((clerkUser: ClerkUser) => {
        return new ClerkUserDTO(clerkUser)
      })
    }
  }
  