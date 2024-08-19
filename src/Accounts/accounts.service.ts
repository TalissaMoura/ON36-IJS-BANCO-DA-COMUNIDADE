import { Injectable } from '@nestjs/common';
import { currentAccountJsonFileRepository } from './currentAccountRepository';
import { poupancaAccountJsonFileRepository } from './poupancaAccountRepository';
import accountFactory from './factories/accountFactory.model';
import { typeAccount } from '../enum/account.enum';
import currentAccount from './creators/currentAccount.model';
import poupancaAccount from './creators/poupancaAccount.model';


@Injectable()
export class AccountsService {
  constructor(
    private readonly _currentAccountRepository: currentAccountJsonFileRepository,
    private readonly _poupancaAccountRepository: poupancaAccountJsonFileRepository
  ) {}

  async createAccount(isBankManager: boolean, type: typeAccount, amount: number, initDate: string): Promise<currentAccount | poupancaAccount> {
    const factory = new accountFactory();
    const newAccount = factory.createAccount(isBankManager, type, amount, initDate);

    switch (type) {
      case typeAccount.CURRENT:
        await this._currentAccountRepository.save(newAccount as currentAccount);
        return newAccount as currentAccount;

      case typeAccount.POUPANCA:
        await this._poupancaAccountRepository.save(newAccount as poupancaAccount);
        return newAccount as poupancaAccount;

      default:
        throw new Error(`Unsupported account type: ${type}`);
    }
  }

  async findCurrentAccountById(id: string): Promise<currentAccount> {
    return await this._currentAccountRepository.findById(id);
  }

  async updateCurrentAccountById(id: string, amount: number, initDate: string): Promise<currentAccount> {
    return await this._currentAccountRepository.updateById(id, amount, initDate);
  }

  async deactivateCurrentAccountById(id: string): Promise<currentAccount> {
    return await this._currentAccountRepository.deleteById(id);
  }

  async findPoupancaAccountById(id: string): Promise<poupancaAccount> {
    return await this._poupancaAccountRepository.findById(id);
  }

  async updatePoupancaAccountById(id: string, amount: number, initDate: string): Promise<poupancaAccount> {
    return await this._poupancaAccountRepository.updateById(id, amount, initDate);
  }

  async deactivatePoupancaAccountById(id: string): Promise<poupancaAccount> {
    return await this._poupancaAccountRepository.deleteById(id);
  }
}
