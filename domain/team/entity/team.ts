  export class Team {
    public readonly id: string
    public readonly clerkUserIds: string[]
    private static limit = 1
    public constructor(params: { id: string; clerkUserIds: string[] }) {
      const { id, clerkUserIds } = params

      if (clerkUserIds.length < Team.limit) {
        throw new Error(`cannot create team with user count below: ${Team.limit}`)
      }
      this.id = id
      this.clerkUserIds = clerkUserIds
    }
    public isEqual(otherTeam: Team) {
      return otherTeam.id === this.id
    }
  }
  