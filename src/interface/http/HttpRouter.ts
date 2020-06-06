import { Router } from 'express';

export default interface HttpRouter {
  readonly routerName: string;

  getRouter(): Router;

// eslint-disable-next-line semi
}
