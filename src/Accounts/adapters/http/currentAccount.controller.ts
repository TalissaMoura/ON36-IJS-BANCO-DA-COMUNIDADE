import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import currentAccount from '../../domain/currentAccount.model';
import { CurrentAccountsService } from '../../application/current-accounts.service';
import { typeAccount } from '../../../enum/account.enum';

@Controller('currentAccounts')
export class currentAccountController {
    constructor(private readonly currentAccountService: CurrentAccountsService){}
      // current Accounts Endpoints
      @Post()
      async createCurrentAccount(
      @Body('isBankManager') isBankManager: boolean,
      @Body('amount') amount: number,
      @Body("initDate") initDate: string,
      @Body("accountNumber") accountNumber: string
      ): Promise<currentAccount> {
        const account = await this.currentAccountService.createAccount(isBankManager,typeAccount.CURRENT,accountNumber,amount,initDate);
      return account as currentAccount
     }
    @Get(":id")
    async findCurrentAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): Promise<currentAccount> {
      return await this.currentAccountService.findAccountById(id) as currentAccount
    }
    @Put(':id')
    async updateCurrentAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number,
      @Body("accountNumber") accountNumber: string
    ): Promise<currentAccount>{
      return await this.currentAccountService.updateAccountById(id,accountNumber,amount,initDate) as currentAccount
    }
    @Delete(":id")
    async deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):Promise<currentAccount>{
      return await this.currentAccountService.deactivateAccountById(id) as currentAccount
    }
  
}
