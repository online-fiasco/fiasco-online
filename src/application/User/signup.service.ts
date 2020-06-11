import { injectable, inject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import UserRepository from '@src/domain/User/repository/User.repo';
import { UserDTO } from '@src/domain/User/DTO/UserDTO';

@injectable()
class SignupService {
  public constructor(
    @inject(injectables.UserRepository) private userRepository: UserRepository,
  // eslint-disable-next-line no-empty-function
  ) {}

  public async signup(data: UserDTO, password: string) {
    const user = await this.userRepository.createUser(data, password);

    return user;
  }
}

export default SignupService;
