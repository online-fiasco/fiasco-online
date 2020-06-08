import { injectable, multiInject } from 'inversify';
import injectables from '@src/inversify.config/injectables';
import Runnable from './Runnable';

@injectable()
export default class App {
  private runnables: Runnable[];

  public constructor(
    @multiInject(injectables.Runnable) runnables: Runnable[],
  ) {
    this.runnables = runnables;
  }

  public async run() {
    const promises = this.runnables.map((runnable) => runnable.run());

    await Promise.all(promises);

    console.log('SERVER STARTED');
  }
}
