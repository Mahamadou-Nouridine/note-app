import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { App } from 'src/application/schema/app.schema';

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
