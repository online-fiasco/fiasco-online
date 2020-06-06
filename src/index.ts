import 'reflect-metadata';

import App from '@src/interface/App';

import injectables from './inversify.config/injectables';
import container from './inversify.config';

const app = container.get<App>(injectables.Application);

app.run();
