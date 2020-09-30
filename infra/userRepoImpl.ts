export default class UserRepoImpl {
  public find(userId: string) {
    return {
      isAdmin: true,
    };
  }
}
