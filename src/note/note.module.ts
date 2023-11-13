import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schema/note.schema';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  providers: [NoteService],
  controllers: [NoteController],
})
export class NoteModule {}
