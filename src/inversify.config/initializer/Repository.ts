import { Container } from 'inversify';
// eslint-disable-next-line import/order
import injectables from '../injectables';

import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';
import PlaysetMongoDBRepository from '@src/repository/Playset/Playset.repo';

export default (container: Container) => {
  container
    .bind<PlaysetRepository>(injectables.PlaysetRepository)
    .to(PlaysetMongoDBRepository);
};
