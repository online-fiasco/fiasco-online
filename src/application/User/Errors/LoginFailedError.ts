class LoginFailedError extends Error {
  public constructor(public readonly id: string, message?: string) {
    super(message ?? 'Login Failed');
  }
}

export default LoginFailedError;
