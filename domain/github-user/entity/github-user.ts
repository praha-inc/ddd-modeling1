
  export class GithubUser {
    public readonly id: string
    public constructor(params: { id: string }) {
      const { id } = params
      this.id = id
    }
    public isEqual(otherGithubUser: GithubUser) {
      return otherGithubUser.id === this.id
    }
  }
  