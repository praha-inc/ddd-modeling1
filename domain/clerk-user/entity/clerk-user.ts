
  export class ClerkUser {
    public readonly id: string
    public readonly teamId: string
    public constructor(params: { id: string; teamId: string }) {
      const { id, teamId } = params
      this.id = id
      this.teamId = teamId
    }
    public isEqual(otherClerkUser: ClerkUser) {
      return otherClerkUser.id === this.id && otherClerkUser.teamId === this.teamId
    }
  }
  