import { Injectable, NotFoundException } from '@nestjs/common';
import currentAccount from "./creators/currentAccount.model";
import poupancaAccount from "./creators/poupancaAccount.model";
import * as path from 'path';
import * as fs from 'fs';
import openCurrentAccount from './products/currentAccount/openCurrentAccount.model';
import openPoupancaAccount from './products/poupancaAccount/openPoupancaAccount.model';
import deactivateCurrentAccount from './products/currentAccount/deactivateCurrentAccount.model';

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

  createCurrentAccounts(isBankManager:boolean, accountNumber:string, amount:number,initDate:string): currentAccount {
    const currentAccounts = this.readCurrentAccounts();

    const openAccount:openCurrentAccount = new currentAccount().createOpenAccount(isBankManager)
    const newAccount:currentAccount = openAccount.create(accountNumber,amount,initDate)
    currentAccounts.push(newAccount);
    this.writeCurrentAccounts(currentAccounts);
    return newAccount;
  }

  findCurrentAccountById(id: string): currentAccount {
    const currentAccounts = this.readCurrentAccounts();
    const currentAccount = currentAccounts.find(account => account._accountID === id);

    if(!currentAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }

    return currentAccount;
  }

  updateCurrentAccount(id: string, amount: number, initDate: string, accountNumber: string): currentAccount {
    const accounts = this.readCurrentAccounts();
    const currentAccount = accounts.find(account => account._accountID === id);

    if(!currentAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }
    const currentAccountIndex = accounts.findIndex(account => account._accountID === id);
    currentAccount._amount = amount;
    currentAccount._initDate = initDate;
    currentAccount._accountNumber = accountNumber;

    accounts[currentAccountIndex] = currentAccount

    this.writeCurrentAccounts(accounts);

    return currentAccount;
  }

  deactivateCurrentAccountById(id: string):currentAccount {
    const currentAccounts = this.readCurrentAccounts();
    const findCurrentAccount = currentAccounts.find(account => account._accountID === id);
    if(!findCurrentAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }
    const initAccountCC = new currentAccount()
    const accountCC = Object.assign(initAccountCC,findCurrentAccount) // copy value of properties of findCurrentAccount to accountCC
    const currentAccountIndex = currentAccounts.findIndex(account => account._accountID === id)
    const deactivateCC = accountCC.startDeactivate()
    const account = deactivateCC.deactivate(accountCC)

    currentAccounts[currentAccountIndex] = account

    this.writeCurrentAccounts(currentAccounts);
    return account
  }

  createPoupancaAccount(isBankManager:boolean, accountNumber:string, amount:number,initDate:string): poupancaAccount {
    const poupancaAccounts = this.readPoupancaAccounts();

    const openAccount:openPoupancaAccount = new poupancaAccount().createOpenAccount(isBankManager)
    const newAccount:poupancaAccount = openAccount.create(accountNumber,amount,initDate)
    poupancaAccounts.push(newAccount);
    this.writePoupancaAccounts(poupancaAccounts);
    return newAccount;
  }

  findPoupancaAccountById(id: string): poupancaAccount {
    const poupancaAccounts = this.readPoupancaAccounts();
    const poupancaAccount = poupancaAccounts.find(account => account._accountID === id);

    if(!poupancaAccount) {
      throw new NotFoundException(`Current account with ${id} not found`);
    }

    return poupancaAccount;
  }

  updatePoupancaAccount(id: string, amount: number, initDate: string, accountNumber: string): poupancaAccount {
    const accounts = this.readPoupancaAccounts();
    const poupancaAccount = accounts.find(account => account._accountID === id);
    const poupancaAccountIndex = accounts.findIndex(account => account._accountID === id);

    if(!poupancaAccount) {
      throw new NotFoundException(`poupanca account with ${id} not found`);
    }

    poupancaAccount._amount = amount;
    poupancaAccount._initDate = initDate;
    poupancaAccount._accountNumber = accountNumber;

    accounts[poupancaAccountIndex] = poupancaAccount

    this.writePoupancaAccounts(accounts);

    return poupancaAccount;
  }

  deactivatePoupancaAccountById(id: string): poupancaAccount {
    const poupancaAccounts = this.readPoupancaAccounts();
    const findPoupancaAccount = poupancaAccounts.find(account => account._accountID === id);
    if(!findPoupancaAccount) {
      throw new NotFoundException(`Poupanca account with ${id} not found`);
    }
    const initPoupancaAccount = new poupancaAccount()
    const accountPA = Object.assign(initPoupancaAccount,findPoupancaAccount) // copy value of properties of findCurrentAccount to accountCC
    const poupancaAccountIndex = poupancaAccounts.findIndex(account => account._accountID === id)
    const deactivateCC = accountPA.startDeactivate()
    const account = deactivateCC.deactivate(accountPA)

    poupancaAccounts[poupancaAccountIndex] = account

    this.writePoupancaAccounts(poupancaAccounts);
    return account
  }
}