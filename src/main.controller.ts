//src/main.controller.ts

import { Application } from 'express';
import { HezflixService } from './services/hezflix.service';

export class Controller {
  private hezflixService: HezflixService;

  constructor(private app: Application) {
    this.hezflixService = new HezflixService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.hezflixService.welcomeMessage);
  }
}