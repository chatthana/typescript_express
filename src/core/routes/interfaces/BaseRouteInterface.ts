import { Router } from 'express';

export default interface BaseRouteInterface {
  create(router: Router): void;
}