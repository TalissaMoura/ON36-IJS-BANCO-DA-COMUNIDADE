import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bankManagerController } from './People/bankManager.controller';
import { PeopleService } from './People/people.service';
import { clientController } from './People/client.controller';
import { currentAccountController } from './Accounts/currentAccount.controller';
import { poupancaAccountController } from './Accounts/poupancaAccount.controller';
import { AccountsService } from './Accounts/accounts.service';

@Module({

  controllers: [AppController, bankManagerController,clientController,currentAccountController,poupancaAccountController],
  providers: [AppService,PeopleService,AccountsService],
})
export class AppModule {}
