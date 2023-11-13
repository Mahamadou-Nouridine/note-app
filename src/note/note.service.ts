import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schema/note.schema';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/createNote.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    return await this.noteModel.create(createNoteDto);
  }

  async delete(id: string): Promise<void> {
    return this.noteModel.findByIdAndDelete(id);
  }

  async update(id: string, text: string): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, { text });
  }

  async getAll(appId: string): Promise<Note[]> {
    return this.noteModel.find({ uid: appId });
  }
}
