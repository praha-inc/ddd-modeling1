import { RootPost } from "../domain/root-post/rootPost";
import RootTag from "../domain/rootTag";

// DB上のテーブル
type TagDataModel = {}

type Connection = {
  save: (input: TagDataModel) => {}
  findByContent: (input: any) => {}
  findByPostId: (postId: string) => {}
}

export default class RootTagRepoImpl {
  private readonly conn: Connection
  constructor(conn: Connection) {
    this.conn = conn
  }

  public findTagByContent(content: string) {
    // DB問い合わせ
    return new RootTag('existingTag', ['1', '2', '3'])
  }
  public async save(rootTag: RootTag) {
    // DB書き込み
    await this.conn.save(rootTag.tag)
    return 'saved!'
  }
  public async saveAll(rootTags: RootTag[]) {
    for (const rootTag of rootTags) {
      await this.save(rootTag)
    }
    return 'saved!'
  }
  public async findByPostId(postId: string) {
    return [new RootTag('existingTag', ['1', '2', '3'])]
  }
};
