/* eslint-disable import/order */
import { Container } from 'inversify';

import initInterfaceLayer from './initializer/Interface';
import initApplicationLayer from './initializer/Application';
import initRepositoryLayer from './initializer/Repository';

const container = new Container();

initInterfaceLayer(container);
initApplicationLayer(container);
initRepositoryLayer(container);

export default container;
