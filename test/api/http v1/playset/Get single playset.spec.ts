import 'reflect-metadata';
import { injectable } from 'inversify';
import container from '@src/inversify.config';
import injectables from '@src/inversify.config/injectables';

import * as supertest from 'supertest';
import * as sinon from 'sinon';
import { expect } from 'chai';

import HttpApp from '@src/interface/http/HttpApp';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import Mock from './PlaysetMock';
import { getSamplePlayset } from './utils';


describe('GET /v1/playset/{id}', () => {
  let app: HttpApp;
  let request: supertest.SuperTest<supertest.Test>;

  before(async () => {
    container.snapshot();

    container.rebind<PlaysetRepository>(injectables.PlaysetRepository).to(Mock);
    container.bind<HttpApp>('HttpApp').to(HttpApp);
    app = container.get<HttpApp>('HttpApp');

    await app.run();

    request = supertest(app.getApp());
  });

  beforeEach(() => {
    sinon.restore();
  });

  it('Get normal playset', async () => {
    const stub = sinon.stub(Mock.prototype, 'getPlaysetById');
    stub.resolves(getSamplePlayset());

    await request.get('/v1/playset/testid').expect(200);

    expect(stub.called).is.true;
  });

  it('Get playset does not exist', async () => {
    const stub = sinon.stub(Mock.prototype, 'getPlaysetById');
    stub.resolves(null);

    await request.get('/v1/playset/testid').expect(404);

    expect(stub.called).is.true;
  });

  after(async () => {
    await app.stop();
    container.restore();
  });
});
