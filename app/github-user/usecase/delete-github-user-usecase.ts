
  import { GithubUserRepository } from '../../../domain/github-user/repository/github-user-repository'

  export class DeleteGithubUserUsecase {
    private readonly githubUserRepo: GithubUserRepository

    public constructor(githubUserRepo: GithubUserRepository) {
      this.githubUserRepo = githubUserRepo
    }

    public async do(id: string) {
      try {
        await this.githubUserRepo.delete(id)
      } catch (error) {
        // todo: error handling
        console.error(error)
      }
    }
  }
  