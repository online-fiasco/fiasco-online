import { injectable, multiInject } from 'inversify';
import injectables from '@src/inversify.config/injectables';

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

    this.app.get('/version', (req: Express.Request, res: Express.Response) => {
      res.send(process.env.npm_package_version);
    });

    httpApps.forEach((httpApp) => {
      this.app.use(httpApp.routerName, httpApp.router);
    });

    this.app.use(
      // eslint-disable-next-line no-unused-vars
      (error: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        console.error(error);
        res.status(500).send('Unexpected error occurred');
      },
    );
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
