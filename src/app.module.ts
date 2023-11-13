import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://nouridine:5848094312@cluster0.bzxp8sd.mongodb.net/note-app?retryWrites=true&w=majority',
      'mongodb://localhost:27017/test',
      {
        connectionFactory: (connection) => {
          if (connection.readyState === 1) {
            console.log('DB connected');
          }
          connection.on('disconnected', () => {
            console.log('DB disconnected');
          });
          return connection;
        },
      },
    ),
    ApplicationModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
