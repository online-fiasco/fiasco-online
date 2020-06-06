/* eslint-disable import/order */
import { Container } from 'inversify';
import injectables from './injectables';

import App from './interface/App';
import Runnable from './interface/Runnable';
import HttpApp from './interface/http/HttpApp';
import HttpRouter from './interface/http/HttpRouter';
import HttpV1Router from './interface/http/v1';

import GetPlaysetsService from './application/Playset/getPlaysets.service';
import GetUserPlaysetService from './application/Playset/getUserPlayset.service';

import PlaysetRepository from './domain/Playset/repository/Playset.repo';

import PlaysetMongoDBRepository from './repository/Playset/Playset.repo';

const container = new Container();

/**
 * Interfaces
 */
container
  .bind<App>(injectables.Application)
  .to(App);
container
  .bind<Runnable>(injectables.Runnable)
  .to(HttpApp);
container
  .bind<HttpRouter>(injectables.HttpApplication)
  .to(HttpV1Router);

/**
 * Applications
 */
container
  .bind<GetUserPlaysetService>(injectables.GetUserPlaysetService)
  .to(GetUserPlaysetService);
container
  .bind<GetPlaysetsService>(injectables.GetPlaysets)
  .to(GetPlaysetsService);

/**
 * Repositories
 */
container
  .bind<PlaysetRepository>(injectables.PlaysetRepository)
  .to(PlaysetMongoDBRepository);

export default container;
