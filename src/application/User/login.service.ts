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

  public async login(userId: string, password: string) {
    const validator = await this.userRepository.getPasswordValidator(userId);
    if (validator === null) { throw new UserNotFoundError(userId); }

    const user = validator(password);
    if (user === null) { throw new LoginFailedError(userId); }

    return user;
  }
}

export default LoginService;
