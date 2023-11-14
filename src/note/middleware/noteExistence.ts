import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { NoteService } from '../note.service';

@Injectable()
export class NoteExistence implements NestMiddleware {
  constructor(private noteService: NoteService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const noteId = req.params.id;
    const note = await this.noteService.getNote(noteId);
    if (!note) throw new NotFoundException('Note not found');
    next();
  }
}
