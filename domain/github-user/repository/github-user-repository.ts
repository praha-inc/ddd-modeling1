
  import { GithubUser } from '../entity/github-user'

  export interface GithubUserRepository {
    index(): Promise<GithubUser[]>;
    find(id: string): Promise<GithubUser>;
    delete(id: string): Promise<void>;
    update(githubUser: GithubUser): Promise<GithubUser>;
  }
  