import RootTag from "../../root-tag/entity/root-tag";
import { RootPost } from "../entity/root-post";
import { Status } from "../valueObject/status";

export interface RootPostFactory {
  createRootPost(params: {
    content: string;
    tagContents: string[];
    status: Status;
    teamId: string;
    userId: string;
    createdAt: string;
  }): Promise<{ rootPost: RootPost; rootTags: RootTag[] }>;
}
