import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApplicationService } from '../../application/application.service';

@Injectable()
export class AppExistence implements NestMiddleware {
  constructor(private appService: ApplicationService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const appId = req.params.appid;
    const app = await this.appService.getApp(appId);
    if (!app) throw new NotFoundException('Application not found');
    next();
  }
}
