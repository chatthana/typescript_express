import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export default class App {
  
  private app: express.Application;

  private constructor(config: Object) {
    this.app = express();
  }

  public static init(config: Object) {
    return new App(config);
  }

}