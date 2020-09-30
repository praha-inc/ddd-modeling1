class TeamBill {
  private readonly id: string
  private readonly paymentRequiredDate: Date
  private readonly fee: Number
  private readonly paid: boolean

  public constructor(params: { id: string; paymentRequiredDate: Date, paid: boolean, fee: Number}) {
    const { id, paymentRequiredDate, paid, fee } = params
    this.id = id
    this.paymentRequiredDate = paymentRequiredDate
    this.paid = paid
    this.fee = fee
  }

  public isPaid() {
    return this.paid
  }
}

export class Team {
  private readonly id: string
  private readonly clerkUserIds: string[]
  private readonly TeamBills: TeamBill[]
  private static limit = 1
  private static PAYMENT_REQUIRED_USER_COUNT = 10
  public constructor(params: { id: string; clerkUserIds: string[], TeamBills: TeamBill[] }) {
    const { id, clerkUserIds, TeamBills } = params

    if (clerkUserIds.length < Team.limit) {
      throw new Error(`cannot create team with user count below: ${Team.limit}`)
    }
    this.id = id
    this.clerkUserIds = clerkUserIds
    this.TeamBills = TeamBills
  }
  public isEqual(otherTeam: Team) {
    return otherTeam.id === this.id
  }

  public isPaid() {
    return this.TeamBills.every(TeamBill => TeamBill.isPaid())
  }

  public isPaymentRequired() {
    return this.clerkUserIds.length >= Team.PAYMENT_REQUIRED_USER_COUNT
  }

  public getId() {
    return this.id
  }

  public getClerkUserIds() {
    return this.clerkUserIds
  }

  public getTeamBills() {
    return this.TeamBills
  }

  public addTeamBill({ paymentRequiredDate, fee }: { paymentRequiredDate: Date, fee: Number }) {
    this.TeamBills.push(new TeamBill({ id: 'dummy', paymentRequiredDate, paid: false, fee}))
  }
}
