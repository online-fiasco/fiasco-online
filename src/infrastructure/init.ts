import MongooseConnect from './mongoose/connect';

export default async () => {
  await MongooseConnect();
};
