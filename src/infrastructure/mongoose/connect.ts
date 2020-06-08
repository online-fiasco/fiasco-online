import { connect, ConnectionOptions } from 'mongoose';
import { MongoConnectUri } from '@src/config';

export default async () => {
  const option: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const uri = MongoConnectUri;

  if (uri === undefined) { throw new Error('mongoose connection uri not set'); }

  await connect(uri, option);
};
