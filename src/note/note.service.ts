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
    return await this.noteModel.findByIdAndDelete(id);
  }

  async update(id: string, text: string): Promise<Note> {
    return await this.noteModel.findByIdAndUpdate(id, { text }, { new: true });
  }

  async getAll(appId: string): Promise<Note[]> {
    return await this.noteModel.find({ app: appId }).select('-app');
  }

  async getNote(noteId: string) {
    return await this.noteModel.findById(noteId).select('-app');
  }

  async toggleFavorite(noteId: string): Promise<Note> {
    const note = await this.getNote(noteId);
    note.isFavorite = !note.isFavorite;
    return await note.save();
  }
}
