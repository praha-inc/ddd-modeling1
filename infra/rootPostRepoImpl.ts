import { RootPost } from "../domain/rootPost";

// DB上のテーブル
type PostDataModel = {}

type Connection = {
  find: (id: string) => {}
  save: (input: PostDataModel) => {}
  delete: (post: PostDataModel) => {}
}

export default class RootPostRepoImpl {
  private readonly conn: Connection
  constructor(conn: Connection) {
    this.conn = conn
  }

  public async find(id: string) {
    // DB読み込み
    return new RootPost({
      id: 'existingPostId',
      content: 'hogehoge',
      tagIds: ['1', '2']
    })
  }

  public async save(rootPost: RootPost) {
    // DB書き込み
    await this.conn.save(rootPost.post)
    return 'saved!'
  }
  public async delete(rootPost: RootPost) {
    // DB書き込み
    await this.conn.delete(rootPost.post)
    return 'deleted!'
  }
}; 
