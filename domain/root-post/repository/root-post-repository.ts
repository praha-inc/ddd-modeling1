import { RootPost } from "../entity/root-post";

export interface RootPostRepository {
  find(id: string, teamId?: number, userId?: number): Promise<RootPost>;
  findIds(criteria: { createdAt: string[] }): Promise<string[]>;
  deleteByCreatedAt(date: string): Promise<string>;
  deleteByIds(ids: string[]): Promise<string>;
}
