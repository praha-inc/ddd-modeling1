import { ClerkUserRepository } from "../../../domain/clerk-user/repository/clerk-user-repository";
import { ClerkUserDTO } from "../dto/clerk-user-dto";

export class DeleteClerkUserUsecase {
  private readonly clerkUserRepo: ClerkUserRepository;
  public constructor(clerkUserRepo: ClerkUserRepository) {
    this.clerkUserRepo = clerkUserRepo;
  }

  public async do(teamId: string) {
    const clerkUser = await this.clerkUserRepo.create(teamId);
    if (!clerkUser) return undefined;

    return new ClerkUserDTO(clerkUser);
  }
}
