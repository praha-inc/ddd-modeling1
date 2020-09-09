class Post {
  public readonly id: string
  public readonly content: string

  constructor(id: string, content: string) {
    this.id = id
    this.content = content

    if (this.content.length > 300) throw new Error('postは300文字以内でお願いします！')
  }
}

// post集約
export class RootPost {
  public readonly post: Post
  public readonly tagIds: string[]

  constructor(params: { id: string, content: string, tagIds: string[]}) {
    const { id, content, tagIds } = params
    this.post = new Post(id, content)
    this.tagIds = tagIds

    if (this.tagIds.length > 5) throw new Error('一つのpost紐づけられるタグは5つまでです！')
  }
}
