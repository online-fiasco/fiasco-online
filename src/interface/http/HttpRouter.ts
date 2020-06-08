import { Router } from 'express';

export default interface HttpRouter {
  readonly routerName: string;
  readonly router: Router;

// eslint-disable-next-line semi
}
