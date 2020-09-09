
  import { ClerkUser } from '../entity/clerk-user'

  export interface ClerkUserRepository {
    index(): Promise<ClerkUser[]>;
    find(id: String): Promise<ClerkUser>;
    delete(id: String): Promise<void>;
    update(clerkUser: ClerkUser): Promise<ClerkUser>;
  }
  