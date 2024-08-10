import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bankManagerController } from './People/bankManager.controller';
import { PeopleService } from './People/people.service';
import { clientController } from './People/client.controller';

@Module({

  controllers: [AppController, bankManagerController,clientController],
  providers: [AppService,PeopleService],
})
export class AppModule {}
