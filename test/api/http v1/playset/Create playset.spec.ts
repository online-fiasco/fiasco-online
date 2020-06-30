import 'reflect-metadata';
import container from '@src/inversify.config';
import injectables from '@src/inversify.config/injectables';

import * as supertest from 'supertest';
import * as sinon from 'sinon';
import { expect } from 'chai';

import HttpApp from '@src/interface/http/HttpApp';
import PlaysetRepository from '@src/domain/Playset/repository/Playset.repo';

import * as jwt from 'jsonwebtoken';
import User from '@src/domain/User/entity/User.entity';
import Mock from './PlaysetMock';
import { getSamplePlayset } from './utils';


describe('POST /v1/playset', () => {
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

  it('Should response 401 if request not have authrization', async () => {
    const stub = sinon.stub(Mock.prototype, 'createPlayset');
    const sample = getSamplePlayset({ _id: undefined });

    await request
      .post('/v1/playset')
      .send(sample)
      .expect(401);

    expect(stub.called).is.not.true;
  });

  it('Should response 400 if request have invalid body', async () => {
    const stub = sinon.stub(Mock.prototype, 'createPlayset');
    const verifyStub = sinon.stub(jwt, 'verify');
    verifyStub.returns({ _id: 'testuserid', email: 'test@no.mail', nickname: 'test', username: 'test' } as any);

    await request
      .post('/v1/playset')
      .set('authorization', 'testkey')
      .expect(400);

    expect(stub.called).is.not.true;
  });

  it('Add New Playset', async () => {
    const stub = sinon.stub(Mock.prototype, 'createPlayset');
    const verifyStub = sinon.stub(jwt, 'verify');
    const sample = getSamplePlayset({ _id: undefined });
    stub.resolves(sample);
    verifyStub.returns({ _id: 'testuserid', email: 'test@no.mail', nickname: 'test', username: 'test' } as any);

    await request
      .post('/v1/playset')
      .set('authorization', 'testkey')
      .send(sample)
      .expect(200);

    expect(stub.called).is.true;
    expect(stub.args[0]).is.deep.equal([{ ...sample, author: 'testuserid' }]);
  });

  after(async () => {
    await app.stop();
    container.restore();
  });
});
