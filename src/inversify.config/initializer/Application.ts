import { Container } from 'inversify';
// eslint-disable-next-line import/order
import injectables from '../injectables';

import GetPlaysetsService from '@src/application/Playset/getPlaysets.service';
import GetUserPlaysetService from '@src/application/Playset/getUserPlayset.service';

export default (container: Container) => {
  container
    .bind<GetUserPlaysetService>(injectables.GetUserPlaysetService)
    .to(GetUserPlaysetService);
  container
    .bind<GetPlaysetsService>(injectables.GetPlaysets)
    .to(GetPlaysetsService);
};
