import { injectable } from 'inversify';

@injectable()
export default class App {
  public run() {
    console.log('SERVER STARTED');
  }
}
