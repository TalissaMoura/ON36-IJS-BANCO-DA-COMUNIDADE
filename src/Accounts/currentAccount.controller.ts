import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import currentAccount from './creators/currentAccount.model';
import { AccountsService } from './accounts.service';
import { typeAccount } from '../enum/account.enum';

@Controller('currentAccounts')
export class currentAccountController {
    constructor(private readonly accountService: AccountsService){}
      // current Accounts Endpoints
      @Post()
      createCurrentAccount(
      @Body('isBankManager') isBankManager: boolean,
      @Body('amount') amount: number,
      @Body("initDate") initDate: string
      ): currentAccount {
        const account = this.accountService.createAccount(isBankManager,typeAccount.CURRENT,amount,initDate);
      return account as currentAccount
     }
    @Get(":id")
    findCurrentAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): currentAccount {
      return this.accountService.findCurrentAccountById(id)
    }
    @Put(':id')
    updateCurrentAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number
    ): currentAccount{
      return this.accountService.updateCurrentAccountById(id,amount,initDate)
    }
    @Delete(":id")
    deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):currentAccount{
      return this.accountService.deactivateCurrentAccountById(id)
    }
  
}
