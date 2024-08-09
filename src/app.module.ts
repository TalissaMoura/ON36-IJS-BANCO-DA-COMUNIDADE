import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankManagerModule } from './bankManager/bankManager.module';
import { bankManagerController } from './bankManager/bankManager.controller';
import { bankManagerService } from './bankManager/bankManager.service';
import { PeopleService } from './People/people.service';
import { PeopleController } from './People/people.controller';

@Module({

  controllers: [AppController, PeopleController],
  providers: [AppService, PeopleService],
  imports: [BankManagerModule],
})
export class AppModule {}
