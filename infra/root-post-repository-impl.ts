import { RootPost } from "../domain/root-post/entity/root-post";
import { Status } from "../domain/root-post/valueObject/status";

// DB上のテーブル
type PostDataModel = {};

type Connection = {
  find: (id: string) => {};
  save: (input: PostDataModel) => {};
  delete: (post: PostDataModel) => {};
};

export default class RootPostRepoImpl {
  private readonly conn: Connection;
  constructor(conn: Connection) {
    this.conn = conn;
  }

  public async find(id: string, teamId?: string, userId?: number) {
    // DB読み込み
    // id: 記事ID
    // teamId: チームID (公開範囲がチーム内限定の場合に使用)
    // userId: チームID (公開範囲が非公開の場合に使用)

    // 検索に一致したものを返す
    return new RootPost({
      id: "existingPostId",
      content: "hogehoge",
      status: new Status("show"),
      teamId: "1",
      userId: "1",
      tagIds: ["1", "2"],
      createdAt: "2020-09-23T10:19:38.468Z",
    });
  }

  public async findIds(criteria: { createdAt: string[] }) {
    // 検索に一致したものを返す
    return ["foo", "bar", "baz"];
  }

  public async save(rootPost: RootPost) {
    // DB書き込み
    await this.conn.save(rootPost.post);
    return "saved!";
  }

  public async delete(rootPost: RootPost) {
    // DB書き込み
    await this.conn.delete(rootPost.post);
    return "deleted!";
  }

  public async deleteByCreatedAt(date: string) {
    // date を元に削除する
    await this.conn.delete(date);
    return "deleted!";
  }

  public async deleteByIds(ids: string[]) {
    // 渡されたIDを元に削除処理を行う
    return "deleted!";
  }
}
