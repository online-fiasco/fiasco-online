import 'reflect-metadata';
import * as dotenv from 'dotenv';

import App from '@src/interface/App';

import injectables from './inversify.config/injectables';
import container from './inversify.config';

dotenv.config();

const app = container.get<App>(injectables.Application);

app.run();
