class TeamPayment {
  private readonly id: string
  private readonly paymentRequiredDate: Date
  private readonly paid: boolean

  public constructor(params: { id: string; paymentRequiredDate: Date, paid: boolean}) {
    const { id, paymentRequiredDate, paid } = params
    this.id = id
    this.paymentRequiredDate = paymentRequiredDate
    this.paid = paid
  }

  public isPaid() {
    return this.paid
  }
}

export class Team {
  private readonly id: string
  private readonly clerkUserIds: string[]
  private readonly teamPayments: TeamPayment[]
  private static limit = 1
  public constructor(params: { id: string; clerkUserIds: string[], teamPayments: TeamPayment[] }) {
    const { id, clerkUserIds, teamPayments } = params

    if (clerkUserIds.length < Team.limit) {
      throw new Error(`cannot create team with user count below: ${Team.limit}`)
    }
    this.id = id
    this.clerkUserIds = clerkUserIds
    this.teamPayments = teamPayments
  }
  public isEqual(otherTeam: Team) {
    return otherTeam.id === this.id
  }

  public isPaid() {
    return this.teamPayments.every(teamPayment => teamPayment.isPaid)
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
