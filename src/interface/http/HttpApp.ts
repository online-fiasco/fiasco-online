import { injectable, multiInject } from 'inversify';
import injectables from '@src/injectables';

import * as Express from 'express';
import * as cors from 'cors';

import Runnable from '../Runnable';
import HttpRouter from './HttpRouter';

@injectable()
class HttpApp implements Runnable {
  private app: Express.Express;

  public constructor(
    @multiInject(injectables.HttpApplication) httpApps: HttpRouter[],
  ) {
    this.app = Express();

    this.app.use(cors());
    this.app.use(Express.json());

    this.app.get('/', (req: Express.Request, res: Express.Response) => {
      res.send('Fiasco-Online HTTP API SERVER');
    });

    httpApps.forEach((httpApp) => {
      this.app.use(httpApp.routerName, httpApp.router);
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