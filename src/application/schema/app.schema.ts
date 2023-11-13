import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Application {
  @Prop()
  uid: string;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
