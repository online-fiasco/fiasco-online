/* eslint-disable import/first */
import 'reflect-metadata';
import * as dotenv from 'dotenv';

dotenv.config();

import App from '@src/interface/App';

import injectables from './inversify.config/injectables';
import container from './inversify.config';
import init from './infrastructure/init';


const app = container.get<App>(injectables.Application);

init().then(() => app.run());
