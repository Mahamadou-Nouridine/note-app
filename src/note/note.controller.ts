import {
  Body,
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/createNote.dto';
import { ApplicationService } from '../application/application.service';

@Controller('app/:appid/notes')
export class NoteController {
  constructor(
    private noteService: NoteService,
    private applicationService: ApplicationService,
  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createNoteDto: CreateNoteDto,
    @Param() params: Record<string, string>,
  ) {
    const app = await this.applicationService.getApp(params.appid);
    const newApp = { app: app._id, ...createNoteDto };
    const newNote = await this.noteService.create(newApp);
    return newNote;
  }

  @Get()
  async getAll(@Param() params: Record<string, string>) {
    try {
      const app = await this.applicationService.getApp(params.appid);
      const notes = await this.noteService.getAll(app._id.toString());
      return notes;
    } catch (error) {
      throw new InternalServerErrorException('An unexpected Error occured', {
        cause: error,
      });
    }
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') noteId: string,
    @Body() createNoteDto: CreateNoteDto,
  ) {
    try {
      const updatedNote = await this.noteService.update(
        noteId,
        createNoteDto.text,
      );
      return updatedNote;
    } catch (error) {
      throw new InternalServerErrorException('An unexpected Error occured', {
        cause: error,
      });
    }
  }

  @Post(':id/toggle-favorite')
  async toggleFavorite(@Param('id') noteId: string) {
    try {
      const updatedNote = await this.noteService.toggleFavorite(noteId);
      return updatedNote;
    } catch (error) {
      throw new InternalServerErrorException('An unexpected Error occured', {
        cause: error,
      });
    }
  }
}
