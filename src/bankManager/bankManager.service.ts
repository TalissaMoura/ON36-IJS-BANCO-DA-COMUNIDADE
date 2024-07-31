import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import BankManager from './bankManager.model';
import ClientAccount from 'src/clientAccount/clientAccount.model';

@Injectable()
export class bankManagerService {
  private readonly filePath = path.resolve('src/bankManager/bankManager.json');

  constructor() {
    const bankManagerAccounts = this.readBankManagerAccounts();
  }

  private readBankManagerAccounts(): BankManager[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as BankManager[];
  }

  private writeBankManagerAccounts(bankManagerAccounts:BankManager[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(bankManagerAccounts, null, 2), 'utf8');
  }

  createBankManager(name:string,cpf:string,initDate:string,state:string,city:string):BankManager{
    const listOfBankManagerAccounts = this.readBankManagerAccounts();

    const newBankManager = new BankManager(name,cpf,initDate,state,city)

    listOfBankManagerAccounts.push(newBankManager)
    this.writeBankManagerAccounts(listOfBankManagerAccounts)

    return newBankManager;
  }

  findById(id: string): BankManager {
    const listOfBankManagersAccounts = this.readBankManagerAccounts();
    console.log(Object.entries(listOfBankManagersAccounts[0]))
    const account = listOfBankManagersAccounts.find(BankManager => BankManager._bankManagerID === id);
    if (!account) {
      throw new NotFoundException(`Bank Manager Account with id ${id} not found`);
    }
    return account;
  }

  updateBankManager(bankManagerUpdated: BankManager): BankManager {
    const listOfBankManagerAccounts = this.readBankManagerAccounts();
    const bankManagerIndex = listOfBankManagerAccounts.findIndex(bankManager => bankManager._bankManagerID === bankManagerUpdated._bankManagerID);
    if (bankManagerIndex === -1) {
      throw new NotFoundException('Bank manager not found');
    }

    const updatedBankManager: BankManager = {
      ...bankManagerUpdated,
    };

    listOfBankManagerAccounts[bankManagerIndex] = updatedBankManager;
    this.writeBankManagerAccounts(listOfBankManagerAccounts);
    return bankManagerUpdated;
  }

  deactiveBankManagerByID(bankManagerID:string): void {
    const listOfBankManagerAccounts = this.readBankManagerAccounts();
    const bankManager = listOfBankManagerAccounts.find(bankManager => bankManager._bankManagerID === bankManagerID);
    if (!bankManager) {
      throw new NotFoundException(`Manager with id ${bankManagerID} not found`);
    }

    bankManager._isActive = false
    this.updateBankManager(bankManager);
  }

  addClientAccountByID(bankManagerID:string,newClientAccount:ClientAccount):void{
    const bankManagerAccount = this.findById(bankManagerID)
    if (!bankManagerAccount) {
      throw new NotFoundException(`Bank Manager with id ${bankManagerID} not found`);
    }
    bankManagerAccount._clientAccount.push(newClientAccount)
  }

  updateClientAccount(bankManagerID:string, clientAccountUpdated: ClientAccount): ClientAccount {
    const bankManagerAccount = this.findById(bankManagerID)
    const listOfClientAccounts = bankManagerAccount._clientAccount
    const ClientAccountIndex = listOfClientAccounts.findIndex(clientAccount => clientAccount._clientAccountID === clientAccountUpdated._clientAccountID);
    if (ClientAccountIndex === -1) {
      throw new NotFoundException('ClientAccount not found')
    }

    const updatedClientAccount: ClientAccount = {
      ...clientAccountUpdated,
    };

    listOfClientAccounts[ClientAccountIndex] = updatedClientAccount;

    bankManagerAccount._clientAccount = listOfClientAccounts

    this.updateBankManager(bankManagerAccount)
    
    return updatedClientAccount;
  }

  deactivateCurrentAccountByID(bankManagerID:string,clientAccountID:string,currentAccountNumber:number):void{
    const bankManagerAccount = this.findById(bankManagerID)
    if (!bankManagerAccount) {
      throw new NotFoundException(`Bank Manager with id ${bankManagerID} not found`);
    }

    const listOfClientAccounts = bankManagerAccount._clientAccount
    const clientAccount = listOfClientAccounts.find(cc => cc._clientAccountID === clientAccountID)

    if (!clientAccount){
      throw new NotFoundException(`Client Account with id ${clientAccountID} not found`);
    }
    
    const currentAccount = clientAccount._currentAccount.find(account => account._currentAccountNumber === currentAccountNumber)

    if (!currentAccount){
      throw new NotFoundException(`Current Account Number ${currentAccountNumber} not found`)
    }

    currentAccount._isActive = false

    this.updateClientAccount(bankManagerID,clientAccount)

  }


  deactivatePoupancaAccountByID(bankManagerID:string,clientAccountID:string, poupancaAccountNumber:number):void{
    const listOfBankManagerAccounts = this.readBankManagerAccounts();
    const bankManagerAccount = listOfBankManagerAccounts.find(account => account._bankManagerID === bankManagerID);
    if (!bankManagerAccount) {
      throw new NotFoundException(`Bank Manager with id ${bankManagerID} not found`);
    }

    const listOfClientAccounts = bankManagerAccount._clientAccount
    const clientAccount = listOfClientAccounts.find(cc => cc._clientAccountID === clientAccountID)

    if (!clientAccount){
      throw new NotFoundException(`Client Account with id ${clientAccountID} not found`);
    }
    
    const poupancaAccount = clientAccount._poupancaAccount.find(account => account._poupancaAccountNumber === poupancaAccountNumber)

    if (!poupancaAccount){
      throw new NotFoundException(`Current Account Number ${poupancaAccountNumber} not found`)
    }

    poupancaAccount._isActive = false

    this.updateClientAccount(bankManagerID,clientAccount)

}
}
