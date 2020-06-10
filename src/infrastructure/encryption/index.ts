import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();

  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, encoded: string) => {
  const result = bcrypt.compareSync(password, encoded);

  return result;
};
