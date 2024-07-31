import { Controller, Get, Post, Delete,Put, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { bankManagerService } from './bankManager.service';
import BankManager from './bankManager.model';

@Controller('bankmanager')
export class bankManagerController {
  constructor(private readonly bankManagerService: bankManagerService) {}

  @Post()
  createBankManager(
    @Body('name') name: string,
    @Body('cpf') cpf: string,
    @Body('initDate') initDate: string,
    @Body('state') state: string,
    @Body('city') city: string
  ): BankManager {
    return this.bankManagerService.createBankManager(name,cpf,initDate,state,city);
  }
  @Get(":id")
  findByID(
    @Param('id',new ParseUUIDPipe({ version: '4' })) id: string
  ): BankManager {
    return this.bankManagerService.findById(id)
  }
  @Put(':id')
  updateBankManager(
    @Body("name") name: string,
    @Body("cpf") cpf: string,
    @Body("initDate") initDate: string,
    @Body("state") state: string,
    @Body("city") city: string
  ): BankManager{
    const updateBankManager = new BankManager(name,cpf,initDate,state,city)
    return this.bankManagerService.updateBankManager(updateBankManager)
  }
  @Delete(":id")
  deactiveBankManager(
    @Param("id",new ParseUUIDPipe({ version: '4' })) id: string
  ): void {
    return this.bankManagerService.deactiveBankManagerByID(id)
  }

}
