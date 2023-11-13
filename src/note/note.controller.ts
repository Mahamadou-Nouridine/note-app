import { Controller, Get, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/createNote.dto';

@Controller(':app/notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post()
  async create(createNoteDto: CreateNoteDto) {
    const newNote = await this.noteService.create(createNoteDto);
    return newNote;
  }

  @Get()
  async getAll(createNoteDto: CreateNoteDto) {
    const newNote = await this.noteService.create(createNoteDto);
    return newNote;
  }
}
