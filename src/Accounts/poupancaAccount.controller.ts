import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import poupancaAccount from './creators/poupancaAccount.model';
import { AccountsService } from './accounts.service';
import { typeAccount } from '../enum/account.enum';


@Controller("poupancaAccounts")
export class poupancaAccountController {
  constructor(private readonly accountService: AccountsService){}
    // poupanca Accounts Endpoints
    @Post()
    createPoupancaAccount(
    @Body('isBankManager') isBankManager: boolean,
    @Body('amount') amount: number,
    @Body("initDate") initDate: string
    ): Promise<poupancaAccount> {
      const account = this.accountService.createAccount(isBankManager,typeAccount.POUPANCA,amount,initDate);
    return account as Promise<poupancaAccount>
  }
    @Get(":id")
    async findpoupancaAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): Promise<poupancaAccount> {
        return await this.accountService.findPoupancaAccountById(id)
    }
    @Put(':id')
    async updatepoupancaAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number
    ): Promise<poupancaAccount>{
      return await this.accountService.updatePoupancaAccountById(id,amount,initDate)
    }
    @Delete(":id")
    async deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):Promise<poupancaAccount>{
      return await this.accountService.deactivatePoupancaAccountById(id)
    }
}