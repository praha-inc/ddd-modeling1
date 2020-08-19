
  export class Team {
    public readonly id: string
    public constructor(params: { id: string }) {
      const { id } = params
      this.id = id
    }
    public isEqual(otherTeam: Team) {
      return otherTeam.id === this.id
    }
  }
  