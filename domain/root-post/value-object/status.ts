const statusList = ["show", "team", "hide"] as const;

type StatusCode = typeof statusList[number];

export class Status {
  public readonly status: StatusCode;

  constructor(status: string) {
    this.status = statusList.includes(status as StatusCode)
      ? (status as StatusCode)
      : "hide";
  }
}
