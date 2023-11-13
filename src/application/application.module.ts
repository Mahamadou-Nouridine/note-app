import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from './schema/app.schema';
import { NoteModule } from 'src/note/note.module';
import { ApplicationService } from './application.service';
import { Uid } from './uid.provider';
import { ApplicationController } from './application.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]),
    NoteModule,
  ],
  providers: [ApplicationService, Uid],
  controllers: [ApplicationController],
})
export class ApplicationModule {}
