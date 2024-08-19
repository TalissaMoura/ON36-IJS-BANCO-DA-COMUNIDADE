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
      ): Promise<currentAccount> {
        const account = this.accountService.createAccount(isBankManager,typeAccount.CURRENT,amount,initDate);
      return account as Promise<currentAccount>
     }
    @Get(":id")
    async findCurrentAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): Promise<currentAccount> {
      return await this.accountService.findCurrentAccountById(id)
    }
    @Put(':id')
    async updateCurrentAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number
    ): Promise<currentAccount>{
      return await this.accountService.updateCurrentAccountById(id,amount,initDate)
    }
    @Delete(":id")
    async deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):Promise<currentAccount>{
      return await this.accountService.deactivateCurrentAccountById(id)
    }
  
}
