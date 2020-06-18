import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import UserRepository from '@src/domain/User/repository/User.repo';
import LoginFailedError from './Errors/LoginFailedError';
import UserNotFoundError from './Errors/UserNotFoundError';

@injectable()
class LoginService {
  public constructor(
    @inject(injectables.UserRepository) private userRepository: UserRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async login(email: string, password: string) {
    const validator = await this.userRepository.getPasswordValidator(email);
    if (validator === null) { throw new UserNotFoundError(email, `User with email '${email}' not found`); }

    const token = validator(password);
    if (token === null) { throw new LoginFailedError(email); }

    return token;
  }
}

export default LoginService;
