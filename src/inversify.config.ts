/* eslint-disable import/order */
import { Container } from 'inversify';
import injectables from './injectables';

import App from '@src/interface/App';

const container = new Container();

/**
 * Interfaces
 */
container.bind<App>(injectables.Application).to(App);

export default container;
