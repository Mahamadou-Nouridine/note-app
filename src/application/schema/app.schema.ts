import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class App {
  @Prop({ required: true })
  uid: string;
  @Prop({ required: true })
  name: string;
}

export const AppSchema = SchemaFactory.createForClass(App);
