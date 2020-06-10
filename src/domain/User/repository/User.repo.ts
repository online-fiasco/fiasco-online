import { UserFilter, UserDTO } from '../DTO/UserDTO';
import User from '../entity/User.entity';

export default interface UserRepository {
  getUsers(filter?: UserFilter): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;

  createUser(data: UserDTO): Promise<User>;

  modifyUser(id: string, data: UserDTO): Promise<User | null>;

  deleteUser(id: string): Promise<User | null>;

// eslint-disable-next-line semi
}
