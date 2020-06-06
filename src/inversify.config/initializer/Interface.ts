import { Container } from 'inversify';
// eslint-disable-next-line import/order
import injectables from '../injectables';

import App from '@src/interface/App';

import Runnable from '@src/interface/Runnable';
import HttpApp from '@src/interface/http/HttpApp';
import HttpRouter from '@src/interface/http/HttpRouter';

import HttpV1Router from '@src/interface/http/v1';
import PlaysetRouter from '@src/interface/http/v1/Playset/Playset.router';
import GetPlaysetsHandler from '@src/interface/http/v1/Playset/controllers/GetPlaysets.handler';

export default (container: Container) => {
  container
    .bind<App>(injectables.Application)
    .to(App);
  container
    .bind<Runnable>(injectables.Runnable)
    .to(HttpApp);
  container
    .bind<HttpRouter>(injectables.HttpApplication)
    .to(HttpV1Router);
  container
    .bind<HttpRouter>(injectables.HttpV1Router)
    .to(PlaysetRouter);
  container
    .bind<GetPlaysetsHandler>(injectables.GetPlaysetsHandler)
    .to(GetPlaysetsHandler);
};