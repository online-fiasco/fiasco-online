import { injectable } from 'inversify';
import UserRepository from '@src/domain/User/repository/User.repo';
import User from '@src/domain/User/entity/User.entity';

@injectable()
class UserMockRepository implements UserRepository {
  public async getUsers(): Promise<User[]> {
    return [
      { _id: 'userid1', nickname: 'nickname1', email: 'test1@no.mail', username: 'testuser1' },
      { _id: 'userid2', nickname: 'nickname2', email: 'test2@no.mail', username: 'testuser2' },
      { _id: 'userid3', nickname: 'nickname3', email: 'test3@no.mail', username: 'testuser3' },
      { _id: 'userid4', nickname: 'nickname4', email: 'test4@no.mail', username: 'testuser4' },
    ];
  }

  public async getUserById(): Promise<User | null> {
    return {
      _id: 'userid1',
      nickname: 'nickname1',
      email: 'test1@no.mail',
      username: 'testuser1',
    };
  }

  public async getPasswordValidator(): Promise<((password: string) => User | null) | null> {
    return () => ({
      _id: 'userid1',
      nickname: 'nickname1',
      email: 'test1@no.mail',
      username: 'testuser1',
    });
  }

  public async createUser(): Promise<User> {
    return {
      _id: 'userid1',
      nickname: 'nickname1',
      email: 'test1@no.mail',
      username: 'testuser1',
    };
  }

  public async modifyUser(): Promise<User | null> {
    return {
      _id: 'userid1',
      nickname: 'nickname1',
      email: 'test1@no.mail',
      username: 'testuser1',
    };
  }

  public async deleteUser(): Promise<User | null> {
    return {
      _id: 'userid1',
      nickname: 'nickname1',
      email: 'test1@no.mail',
      username: 'testuser1',
    };
  }
}

export default UserMockRepository;
