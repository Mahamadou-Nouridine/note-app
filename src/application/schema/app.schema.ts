import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class App {
  @Prop({ required: true })
  uid: string;
}

export const AppSchema = SchemaFactory.createForClass(App);
