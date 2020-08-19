
  import { GithubUser } from '../../../domain/github-user/entity/github-user'
  import { GithubUserRepository } from '../../../domain/github-user/repository/github-user-repository'
  import { GithubUserDTO } from '../dto/github-user-dto'

  export class FindGithubUserUsecase {
    private readonly githubUserRepo: GithubUserRepository

    public constructor(githubUserRepo: GithubUserRepository) {
      this.githubUserRepo = githubUserRepo
    }

    public async do(id: string) {
      const githubUser: GithubUser = await this.githubUserRepo.find(id)
      if (!githubUser) return undefined

      return new GithubUserDTO(githubUser)
    }
  }
  