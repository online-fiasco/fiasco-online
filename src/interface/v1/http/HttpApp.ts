import { injectable } from 'inversify';

import Runnable from '@src/interface/Runnable';

@injectable()
class HttpApp implements Runnable {
  public async run(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default HttpApp;
