
  import {Team} from '../../../domain/team/entity/team'
  export class TeamDTO {
    public readonly id: string
    public constructor(team: Team) {
      this.id = team.getId()
    }
  }
  