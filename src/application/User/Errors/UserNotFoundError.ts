class UserNotFoundError extends Error {
  public constructor(public readonly id: string, message?: string) {
    super(message ?? `User ${id} not found`);
  }
}

export default UserNotFoundError;
