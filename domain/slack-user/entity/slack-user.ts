
  export class SlackUser {
    public readonly id: string
    public constructor(params: { id: string }) {
      const { id } = params
      this.id = id
    }
    public isEqual(otherSlackUser: SlackUser) {
      return otherSlackUser.id === this.id
    }
  }
  