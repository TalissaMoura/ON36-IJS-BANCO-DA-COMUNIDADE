import { Injectable } from "@nestjs/common";
import { typeAccount } from "../../enum/account.enum";
import currentAccount from "../domain/currentAccount.model";
import accountFactory from "../domain/factories/accountFactory.model";
import poupancaAccount from "../domain/poupancaAccount.model";
import { BaseAccountRepository } from "./ports/out/accounts.repository";
import { AccountRepository } from "../adapters/persistence/accounts.repository";

@Injectable()
export abstract class BaseAccountService {
    constructor(
        private readonly accountRepository: BaseAccountRepository,
        private readonly accountFactory: accountFactory
      ) {}
    
      async createAccount(isBankManager: boolean, type: typeAccount, accountNumber: string, amount: number, initDate: string): Promise<currentAccount | poupancaAccount> {
        const newAccount = this.accountFactory.createAccount(isBankManager, type, accountNumber ,amount, initDate);
    
        switch (type) {
          case typeAccount.CURRENT:
            await this.accountRepository.save(newAccount as currentAccount);
            return newAccount as currentAccount;
    
          case typeAccount.POUPANCA:
            await this.accountRepository.save(newAccount as poupancaAccount);
            return newAccount as poupancaAccount;
    
          default:
            throw new Error(`Unsupported account type: ${type}`);
        }
      }
    
      async findAccountById(id: string): Promise<currentAccount|poupancaAccount> {
        return await this.accountRepository.searchById(id);
      }
    
      async updateAccountById(id: string,accountNumber:string,amount: number, initDate: string): Promise<currentAccount | poupancaAccount> {
        return await this.accountRepository.updateById(id,accountNumber, amount, initDate);
      }
    
      async deactivateAccountById(id: string): Promise<currentAccount| poupancaAccount> {
        return await this.accountRepository.deleteById(id);
      }


    async deposit(accountId: string, amount: number): Promise<void> {
        const account = await this.accountRepository.searchById(accountId);
        if (!account) throw new Error('Account not found');
        account.deposit(amount);
        this.accountRepository.save(account);
    }

    async withdraw(accountId: string, amount: number): Promise<void> {
        const account = await this.accountRepository.searchById(accountId);
        if (!account) throw new Error('Account not found');
        account.withdraw(amount);
        this.accountRepository.save(account);
    }

    async transfer(fromAccountId: string, toAccountId: string, amount: number): Promise<void> {
        const fromAccount = await this.accountRepository.searchById(fromAccountId);
        const toAccount = await this.accountRepository.searchById(toAccountId);
        if (!fromAccount || !toAccount) throw new Error('One or both accounts not found');
        
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        
        this.accountRepository.save(fromAccount);
        this.accountRepository.save(toAccount);
    }
    
}