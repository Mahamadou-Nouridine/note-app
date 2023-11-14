import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from './schema/app.schema';
import { ApplicationService } from './application.service';
import { Uid } from './uid.provider';
import { ApplicationController } from './application.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: App.name, schema: AppSchema }])],
  providers: [ApplicationService, Uid],
  controllers: [ApplicationController],
  exports: [ApplicationService],
})
export class ApplicationModule {}
