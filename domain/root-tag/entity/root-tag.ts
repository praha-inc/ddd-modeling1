import { toHash } from "../../../id"

class Tag {
  public readonly id: string
  public readonly content: string

  constructor(content: string) {
    this.id = toHash(content)
    this.content = content

    if (this.content.length === 0) throw new Error('タグは最低1文字でお願いします！')
    if (this.content.length > 100) throw new Error('タグは100文字以内でお願いします！')
  }
}

// tag集約
export default class RootTag {
  public readonly tag: Tag
  public readonly postIds: string[]

  constructor(content: string, postIds: string[]) {
    this.tag = new Tag(content)
    this.postIds = postIds

    if (this.isPostLimitExceeded()) throw new Error('1つのタグにつけられるpostの上限数を超えた')
  }

  private isPostLimitExceeded() {
    return this.postIds.length > 3
  }
}
