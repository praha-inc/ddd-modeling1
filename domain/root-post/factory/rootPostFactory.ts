import RootTag from "../../rootTag";
import { RootPost } from "../entity/root-post";
import { Status } from "../valueObject/status";

export interface RootPostFactory {
  createRootPost(params: {
    content: string;
    tagContents: string[];
    status: Status;
    teamId: string;
    userId: string;
  }): { rootPost: RootPost; rootTags: RootTag[] };
}
