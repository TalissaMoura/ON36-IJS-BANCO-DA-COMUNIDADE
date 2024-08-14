import { Injectable, NotFoundException } from '@nestjs/common';
import currentAccount from "./creators/currentAccount.model";
import poupancaAccount from "./creators/poupancaAccount.model";
import * as path from 'path';
import * as fs from 'fs';
import accountFactory from './factories/accountFactory.model';
import { typeAccount } from '../enum/account.enum';

@Injectable()
export class AccountsService {
  private readonly filePathCC = path.resolve('src/Accounts/currentAccount.json');
  private readonly filePathPA = path.resolve('src/Accounts/poupancaAccount.json');

  private readCurrentAccounts(): currentAccount[] {
    const data = fs.readFileSync(this.filePathCC, 'utf8');
    return JSON.parse(data) as currentAccount[]
  }

  private writeCurrentAccounts(currentAccounts: currentAccount[]): void {
    fs.writeFileSync(this.filePathCC, JSON.stringify(currentAccounts, null, 2), 'utf8');
  }
  private readPoupancaAccounts(): poupancaAccount[] {
    const data = fs.readFileSync(this.filePathPA, 'utf8');
    return JSON.parse(data) as poupancaAccount[]
  }

  private writePoupancaAccounts(poupancaAccounts: poupancaAccount[]): void {
    fs.writeFileSync(this.filePathPA, JSON.stringify(poupancaAccounts, null, 2), 'utf8');
  }

  createAccount(isBankManager:boolean, type: typeAccount,amount:number,initDate:string) {
    const factory = new accountFactory()
    const newAccount = factory.createAccount(isBankManager,type,amount,initDate)
    switch (type){
      case typeAccount.CURRENT:
        const currentAccounts = this.readCurrentAccounts();
        currentAccounts.push(newAccount as currentAccount)
        this.writeCurrentAccounts(currentAccounts);
        return newAccount
      
      case typeAccount.POUPANCA:
        const poupancaAccounts = this.readPoupancaAccounts()
        poupancaAccounts.push(newAccount as poupancaAccount)
        this.writePoupancaAccounts(poupancaAccounts)
        return newAccount
    }
  }

  findCurrentAccountById(id: string): currentAccount {
    const currentAccounts = this.readCurrentAccounts();
    const currentAccount = currentAccounts.find(account => account._accountID === id);

    if(!currentAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }

    return currentAccount;
  }

  updateCurrentAccountById(id: string, amount: number, initDate: string): currentAccount {
    const accounts = this.readCurrentAccounts();
    const currentAccount = this.findCurrentAccountById(id)

    if(!currentAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }
    const currentAccountIndex = accounts.findIndex(account => account._accountID === id);
    currentAccount._amount = amount;
    currentAccount._initDate = initDate;

    accounts[currentAccountIndex] = currentAccount

    this.writeCurrentAccounts(accounts);

    return currentAccount;
  }

  deactivateCurrentAccountById(id: string):currentAccount {
    const currentAccounts = this.readCurrentAccounts();
    const findCurrentAccount = this.findCurrentAccountById(id)
    const currentAccountIndex = currentAccounts.findIndex(account => account._accountID === id);
    if(!currentAccountIndex) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }
    const account = new currentAccount(findCurrentAccount._amount,findCurrentAccount._initDate)
    account._accountID = findCurrentAccount._accountID
    account._accountNumber = findCurrentAccount._accountNumber

    account.processDeactivate()

    currentAccounts[currentAccountIndex] = account

    this.writeCurrentAccounts(currentAccounts);
    return account
  }
  

  findPoupancaAccountById(id: string): poupancaAccount {
    const poupancaAccounts = this.readPoupancaAccounts();
    const poupancaAccount = poupancaAccounts.find(account => account._accountID === id);

    if(!poupancaAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }

    return poupancaAccount;
  }

  updatePoupancaAccountById(id: string, amount: number, initDate: string): poupancaAccount {
    const accounts = this.readPoupancaAccounts();
    const poupancaAccount = this.findPoupancaAccountById(id)
    const poupancaAccountIndex = accounts.findIndex(account => account._accountID === id);

    if(!poupancaAccountIndex) {
      throw new NotFoundException(`poupanca account with ${id} not found`);
    }

    poupancaAccount._amount = amount;
    poupancaAccount._initDate = initDate;

    accounts[poupancaAccountIndex] = poupancaAccount

    this.writePoupancaAccounts(accounts);

    return poupancaAccount;
  }

  deactivatePoupancaAccountById(id: string): poupancaAccount {
    const poupancaAccounts = this.readPoupancaAccounts();
    const findPoupancaAccount = this.findPoupancaAccountById(id)
    const poupancaAccountIndex = poupancaAccounts.findIndex(account => account._accountID === id);
    if(!poupancaAccountIndex) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }
    const account = new poupancaAccount(findPoupancaAccount._amount,findPoupancaAccount._initDate)
    account._accountID = findPoupancaAccount._accountID
    account._accountNumber = findPoupancaAccount._accountNumber

    account.processDeactivate()

    poupancaAccounts[poupancaAccountIndex] = account

    this.writePoupancaAccounts(poupancaAccounts);
    return account
  }
}