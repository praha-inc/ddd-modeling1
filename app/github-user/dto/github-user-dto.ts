
  import {GithubUser} from '../../../domain/github-user/entity/github-user'
  export class GithubUserDTO {
    public readonly id: string
    public constructor(githubUser: GithubUser) {
      this.id = githubUser.id
    }
  }
  