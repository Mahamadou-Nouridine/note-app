import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { App } from './app.schema';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Note {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'App' })
  app: App;

  @Prop()
  text: string;

  @Prop({ default: false })
  isFavorite: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
