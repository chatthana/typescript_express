import { Request, Response, NextFunction, Router } from 'express';
import BaseRouteInterface from './interfaces/BaseRouteInterface';

export class BaseRoute implements BaseRouteInterface {
  create(router: Router) {
    // Create Something
  }
}