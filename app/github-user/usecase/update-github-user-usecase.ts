
  import { GithubUser } from '../../../domain/github-user/entity/github-user'
  import { GithubUserRepository } from '../../../domain/github-user/repository/github-user-repository'
  import { GithubUserDTO } from '../dto/github-user-dto'

  export class UpdateGithubUserUsecase {
    private readonly githubUserRepo: GithubUserRepository

    public constructor(githubUserRepo: GithubUserRepository) {
      this.githubUserRepo = githubUserRepo
    }

    public async do(id: string) {
      try {
        const githubUser: GithubUser = await this.githubUserRepo.find(id)
        if (!githubUser) return undefined

        const updatedGithubUser = new GithubUser({...githubUser})
        const persistedGithubUser = await this.githubUserRepo.update(updatedGithubUser)
        return new GithubUserDTO(persistedGithubUser)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  