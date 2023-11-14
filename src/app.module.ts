import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';
import { NoteModule } from './note/note.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.ATLAS_MONGODB, {
      connectionFactory: (connection) => {
        if (connection.readyState === 1) {
          console.log('DB connected');
        }
        connection.on('disconnected', () => {
          console.log('DB disconnected');
        });
        return connection;
      },
    }),
    ApplicationModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
