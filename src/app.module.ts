import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nouridine:5848094312@cluster0.bzxp8sd.mongodb.net/?retryWrites=true&w=majority',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
