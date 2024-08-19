import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bankManagerController } from './People/bankManager.controller';
import { PeopleService } from './People/people.service';
import { clientController } from './People/client.controller';
import { currentAccountController } from './Accounts/currentAccount.controller';
import { poupancaAccountController } from './Accounts/poupancaAccount.controller';
import { AccountsService } from './Accounts/accounts.service';
import { currentAccountJsonFileRepository } from './Accounts/currentAccountRepository';
import { poupancaAccountJsonFileRepository } from './Accounts/poupancaAccountRepository';

@Module({
  controllers: [AppController, bankManagerController,clientController,currentAccountController,poupancaAccountController],
  providers: [AppService,PeopleService,AccountsService,currentAccountJsonFileRepository,poupancaAccountJsonFileRepository],
})
export class AppModule {}
