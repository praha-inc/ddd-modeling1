import { RootPost } from "../entity/root-post";

export interface RootPostRepository {
  find(id: string, teamId?: number, userId?: number): Promise<RootPost>;
}
