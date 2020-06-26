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


describe('GET /v1/playset', () => {
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

  it('Get playsets', async () => {
    const stub = sinon.stub(Mock.prototype, 'getPlaysets');
    const sample = getSamplePlayset();
    stub.resolves([sample]);

    const response = await request.get('/v1/playset').expect(200);

    expect(response.body.result).is.deep.equal([sample]);
    expect(stub.called).is.true;
  });

  it('Get playsets with filters', async () => {
    const stub = sinon.stub(Mock.prototype, 'getPlaysets');
    const sample = getSamplePlayset();
    const query = { keyword: 'sample', author: 'thisisauthor' };
    stub.resolves([sample]);

    const response = await request
      .get('/v1/playset?keyword=sample&author=thisisauthor')
      .query(query)
      .expect(200);

    expect(response.body.result).is.deep.equal([sample]);
    expect(stub.called).is.true;
    expect(stub.args[0]).is.deep.equal([{ keyword: query.keyword, author: query.author }]);
  });

  after(async () => {
    await app.stop();
    container.restore();
  });
});
