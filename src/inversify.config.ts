/* eslint-disable import/order */
import { Container } from 'inversify';
import injectables from './injectables';

import App from './interface/App';

import GetUserPlaysetService from './application/Playset/getUserPlayset.service';

import PlaysetRepository from './domain/Playset/repository/Playset.repo';
import PlaysetMongoDBRepository from './repository/Playset/Playset.repo';
import GetPlaysetsService from './application/Playset/getPlaysets.service';

const container = new Container();

/**
 * Interfaces
 */
container
  .bind<App>(injectables.Application)
  .to(App);

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
