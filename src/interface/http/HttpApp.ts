import { injectable } from 'inversify';
import * as Express from 'express';
import * as cors from 'cors';

import Runnable from '@src/interface/Runnable';

@injectable()
class HttpApp implements Runnable {
  private app: Express.Express;

  public constructor() {
    this.app = Express();

    this.app.use(cors());
    this.app.use(Express.json());

    this.app.get('/', (req: Express.Request, res: Express.Response) => {
      res.send('Fiasco-Online HTTP API SERVER');
    });
  }

  public run(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.app.listen(3000, () => {
        console.log('HTTP server started on port 3000');
        resolve();
      });
    });
  }
}

export default HttpApp;
