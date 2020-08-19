
  import { GithubUser } from '../../../domain/github-user/entity/github-user'
  import { GithubUserRepository } from '../../../domain/github-user/repository/github-user-repository'
  import { GithubUserDTO } from '../dto/github-user-dto'

  export class IndexGithubUserUsecase {
    private readonly githubUserRepo: GithubUserRepository

    public constructor(githubUserRepo: GithubUserRepository) {
      this.githubUserRepo = githubUserRepo
    }

    public async do() {
      const githubUserList = await this.githubUserRepo.index()
      return githubUserList.map((githubUser: GithubUser) => {
        return new GithubUserDTO(githubUser)
      })
    }
  }
  