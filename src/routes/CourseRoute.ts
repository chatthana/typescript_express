import { Request, Response, NextFunction, Router } from 'express';
import BaseRoute from '../core/routes/BaseRoute';

export default class CourseRoute extends BaseRoute {
  public static create(router: Router) {
    router.get('/courses', (req: Request, res: Response, next: NextFunction) => {

    });
  }
}