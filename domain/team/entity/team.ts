export class Team {
  private readonly id: string
  private readonly clerkUserIds: string[]
  private static limit = 1
  private readonly paid: boolean
  public constructor(params: { id: string; clerkUserIds: string[], paid: boolean }) {
    const { id, clerkUserIds, paid } = params

    if (clerkUserIds.length < Team.limit) {
      throw new Error(`cannot create team with user count below: ${Team.limit}`)
    }
    this.id = id
    this.clerkUserIds = clerkUserIds
    this.paid = paid
  }
  public isEqual(otherTeam: Team) {
    return otherTeam.id === this.id
  }

  public isPaid() {
    return this.paid
  }

  public isPaymentRequired() {
    return this.clerkUserIds.length >= 10
  }

  public getId() {
    return this.id
  }

  public getClerkUserIds() {
    return this.clerkUserIds
  }
}
