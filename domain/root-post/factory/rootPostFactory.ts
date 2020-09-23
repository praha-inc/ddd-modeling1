import { RootPost } from "../entity/root-post";
import { Status } from "../valueObject/status";

export interface RootPostFactory {
  createRootPost(params: {
    id: string;
    content: string;
    status: Status;
    teamId: string;
    userId: string;
    tagIds: string[];
  }): Promise<RootPost>
}