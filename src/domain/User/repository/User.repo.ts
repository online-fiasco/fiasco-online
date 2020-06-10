import { UserFilter, UserDTO } from '../DTO/UserDTO';
import User from '../entity/User.entity';

export default interface UserRepository {
  getUsers(filter?: UserFilter): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
  getUserByValidation (email: string): (password: string) => User | null;

  createUser(data: UserDTO, password: string): Promise<User>;

  modifyUser(id: string, data: UserDTO): Promise<User | null>;

  deleteUser(id: string): Promise<User | null>;

// eslint-disable-next-line semi
}
