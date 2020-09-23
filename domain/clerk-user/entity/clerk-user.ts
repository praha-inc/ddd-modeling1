
  export class ClerkUser {
    public readonly id: string
    public readonly teamId: string
    public readonly isAdmin: boolean // memo: 商用サービスなら「管理者」以外にも色々な権限が出るはずなのでvalueObjectにすると思うけど、今回は勉強用なのでisAdminだけにしておく
    public constructor(params: { id: string; teamId: string; isAdmin: boolean }) {
      const { id, teamId, isAdmin } = params
      this.id = id
      this.teamId = teamId
      this.isAdmin = isAdmin
    }
    public isEqual(otherClerkUser: ClerkUser) {
      return otherClerkUser.id === this.id && otherClerkUser.teamId === this.teamId
    }
  }
  