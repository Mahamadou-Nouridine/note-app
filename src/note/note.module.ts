import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema/note.schema';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { ApplicationModule } from 'src/application/application.module';
import { AppExistence } from './middleware/appExistence';
import { NoteExistence } from './middleware/noteExistence';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
    ApplicationModule,
  ],
  providers: [NoteService],
  controllers: [NoteController],
})
export class NoteModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppExistence).forRoutes('app/:appid/notes');
    consumer.apply(NoteExistence).forRoutes('app/:appid/notes/:id');
  }
}
