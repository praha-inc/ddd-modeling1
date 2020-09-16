
  import { Team } from '../entity/team'

  export interface TeamRepository {
    index(): Promise<Team[]>;
    find(id: string): Promise<Team>;
    delete(id: string): Promise<void>;
    update(team: Team): Promise<Team>;
    create(team: Team): Promise<Team>
  }
  