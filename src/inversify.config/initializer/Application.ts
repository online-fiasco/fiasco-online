import { Container } from 'inversify';
// eslint-disable-next-line import/order
import injectables from '../injectables';

import GetPlaysetsService from '@src/application/Playset/getPlaysets.service';
import GetUserPlaysetService from '@src/application/Playset/getUserPlayset.service';
import CreatePlaysetService from '@src/application/Playset/createPlayset.service';
import UpdatePlaysetsService from '@src/application/Playset/updatePlayset.service';
import GetPlaysetService from '@src/application/Playset/getPlayset.service';
import DeletePlaysetService from '@src/application/Playset/deletePlayset.service';

export default (container: Container) => {
  container
    .bind<GetPlaysetsService>(injectables.GetPlaysetsService)
    .to(GetPlaysetsService);
  container
    .bind<GetPlaysetService>(injectables.GetPlaysetService)
    .to(GetPlaysetService);
  container
    .bind<GetUserPlaysetService>(injectables.GetUserPlaysetService)
    .to(GetUserPlaysetService);
  container
    .bind<CreatePlaysetService>(injectables.CreatePlaysetService)
    .to(CreatePlaysetService);
  container
    .bind<UpdatePlaysetsService>(injectables.UpdatePlaysetService)
    .to(UpdatePlaysetsService);
  container
    .bind<DeletePlaysetService>(injectables.DeletePlaysetService)
    .to(DeletePlaysetService);
};
