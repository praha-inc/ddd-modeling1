import { RootPost } from "../entity/root-post";

export interface RootPostRepository {
  find(id: string): Promise<RootPost>;
}
