
  export class ClerkUser {
    public readonly id: string
    public constructor(params: { id: string }) {
      const { id } = params
      this.id = id
    }
    public isEqual(otherClerkUser: ClerkUser) {
      return otherClerkUser.id === this.id
    }
  }
  