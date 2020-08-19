
  import {ClerkUser} from '../../../domain/clerk-user/entity/clerk-user'
  export class ClerkUserDTO {
    public readonly id: string
    public constructor(clerkUser: ClerkUser) {
      this.id = clerkUser.id
    }
  }
  