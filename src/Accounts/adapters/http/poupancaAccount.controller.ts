import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import poupancaAccount from '../../domain/poupancaAccount.model';
import { typeAccount } from '../../../enum/account.enum';
import { PoupancaAccountsService } from '../../../Accounts/application/poupanca-accounts.service';


@Controller("poupancaAccounts")
export class poupancaAccountController {
  constructor(private readonly poupancaAccountService: PoupancaAccountsService){}
    // poupanca Accounts Endpoints
    @Post()
    async createPoupancaAccount(
    @Body('isBankManager') isBankManager: boolean,
    @Body('amount') amount: number,
    @Body("initDate") initDate: string,
    @Body("accountNumber") accountNumber: string
    ): Promise<poupancaAccount> {
      const account = await this.poupancaAccountService.createAccount(isBankManager,typeAccount.POUPANCA,accountNumber,amount,initDate);
    return account as poupancaAccount
  }
    @Get(":id")
    async findpoupancaAccountByID(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string): Promise<poupancaAccount> {
        return await this.poupancaAccountService.findAccountById(id) as poupancaAccount
    }
    @Put(':id')
    async updatepoupancaAccountById(
      @Param('id',new ParseUUIDPipe({ version: '4' })) id: string,
      @Body("initDate") initDate: string,
      @Body("amount") amount: number,
      @Body("accountNumber") accountNumber: string
    ): Promise<poupancaAccount>{
      return await this.poupancaAccountService.updateAccountById(id,accountNumber,amount,initDate) as poupancaAccount
    }
    @Delete(":id")
    async deactivateClientByID(
      @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
    ):Promise<poupancaAccount>{
      return await this.poupancaAccountService.deactivateAccountById(id) as poupancaAccount
    }
}