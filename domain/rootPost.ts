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
  
  canDelete(user: User, tag: Tag) {
    if (user.isAdmin && tag.posts.length < 5 .... ) {
      return true
    }
    return false
  }
}

public deletePostAppService() {
   const post = postRepo.find()
   if (post.canDelete) {
     postRepo.delete()
   }
}
public deletePostAppService() {
  const post = postRepo.find()
  if (user.isAdmin() && tag.posts.length < 5) {
     postRepo.delete()
  }
}
public deleteTagAppService() {
  ... // ついでに紐づいてるpostを全部消す必要がある
  const post = postRepo.find()
  if (user.isAdmin() || user.isPremium() && tag.posts.length < 5) {
     postRepo.delete()
  }
}
public deleteUserAppService() {
  ... // ついでに紐づいてるpostを全部消す必要がある
  const post = postRepo.find()
  if (user.isAdmin() && tag.posts.length < 5) {
     postRepo.delete()
  }
}

// 1: 「postに紐づくtagの数が５個以内」はドメインルールだけど、「管理者しかpostは消せない」はアプリケーションサービスに記述する
// ここの区別がよくわかっていない

// 例えば松岡さんのタグ管理の概念に関して、「付箋を外して良いのは、付箋をつけた人だけ」ってルールがあったとしたら、
// それはドメインルールなのかな？

// 松岡さんの定義："このソフトウェアの"ユースケースであり、アプリケーションがなければ存在しない
// って書いてあるから、もし「付箋を外していいのはつけた人だけ」ってルールが現実世界にも存在するとしたら、
// それはドメインルールなのではないか？と考えた

// 仮にpostを付箋として捉えると、「postを壁から剥がしていいのは管理者だけ」ってのはドメインルールなのでは？と考えた次第
