import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { App } from './schema/app.schema';
import { Model } from 'mongoose';
import { Uid } from './uid.provider';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectModel(App.name) private appModel: Model<App>,
    private uidGenerator: Uid,
  ) {}

  async create(): Promise<App> {
    const uid = this.uidGenerator.generateId();
    const newApp = new this.appModel({ uid });
    return await newApp.save();
  }

  async getApp(appId: string) {
    const app = this.appModel.findOne({ uid: appId });
    return app;
  }
}
