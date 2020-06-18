import { injectable } from 'inversify';
import { MongooseFilterQuery } from 'mongoose';
import * as config from '@src/config';

import User from '@src/domain/User/entity/User.entity';
import { UserDTO, UserFilter } from '@src/domain/User/DTO/UserDTO';
import UserRepository from '@src/domain/User/repository/User.repo';

import * as encryption from '@src/infrastructure/encryption';
import { UserDocument, UserModel } from '@src/infrastructure/mongoose/models/User.model';
import { sign } from 'jsonwebtoken';

type UserQuery = MongooseFilterQuery<Pick<UserDocument, keyof User>>;
type PasswordValidator = (password: string) => string | null;

@injectable()
class UserMongoDBRepository implements UserRepository {
  private convertDocument(document: UserDocument): User {
    return {
      _id: document._id,
      email: document.email,
      username: document.username,
      nickname: document.nickname,
    };
  }

  public async getUsers(filter: UserFilter = {}): Promise<User[]> {
    const { keyword } = filter;
    const findOption: UserQuery = {};

    if (keyword) findOption.$text = { $search: keyword };

    const users = await UserModel.find(findOption);

    return users.map(this.convertDocument);
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id);

    return user ? this.convertDocument(user) : null;
  }

  public async getPasswordValidator(id: string): Promise<PasswordValidator | null> {
    const userDocument = await UserModel.findById(id);

    if (!userDocument) return null;
    return (password: string) => {
      const isRightPassword = encryption.comparePassword(password, userDocument.password);
      if (!isRightPassword) { return null; }

      const user = this.convertDocument(userDocument);
      const token = sign(user, config.SecretKey as string, { expiresIn: 60 * 60 });

      return token;
    };
  }

  public async createUser(data: UserDTO, password: string): Promise<User> {
    const dataWithPassword = {
      ...data,
      password: encryption.encryptPassword(password),
    };
    const user = await UserModel.create(dataWithPassword);

    return user;
  }

  public async modifyUser(id: string, data: UserDTO): Promise<User | null> {
    const user = await UserModel.findByIdAndUpdate(id, data);

    return user;
  }

  public async deleteUser(id: string): Promise<User | null> {
    const user = await UserModel.findByIdAndDelete(id);

    return user;
  }
}

export default UserMongoDBRepository;
