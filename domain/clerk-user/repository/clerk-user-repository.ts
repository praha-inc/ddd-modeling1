
  import { ClerkUser } from '../entity/clerk-user'

  export interface ClerkUserRepository {
    index(): Promise<ClerkUser[]>;
    find(id: string): Promise<ClerkUser>;
    delete(id: string): Promise<void>;
    update(clerkUser: ClerkUser): Promise<ClerkUser>;
  }
  