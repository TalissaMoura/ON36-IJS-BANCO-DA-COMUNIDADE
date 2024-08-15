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
    ): poupancaAccount {
      const account = this.accountService.createAccount(isBankManager,typeAccount.POUPANCA,amount,initDate);
    return account as poupancaAccount
  }
    @Get(":id")
    findpoupancaAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): poupancaAccount {
      return this.accountService.findPoupancaAccountById(id)
    }
    @Put(':id')
    updatepoupancaAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number
    ): poupancaAccount{
      return this.accountService.updatePoupancaAccountById(id,amount,initDate)
    }
    @Delete(":id")
    deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):poupancaAccount{
      return this.accountService.deactivatePoupancaAccountById(id)
    }
}