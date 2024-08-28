import { typeAccount } from "../../enum/account.enum";
import currentAccount from "../domain/currentAccount.model";
import accountFactory from "../domain/factories/accountFactory.model";
import poupancaAccount from "../domain/poupancaAccount.model";
import { BaseAccountRepository } from "./ports/out/accounts.repository";
export declare abstract class BaseAccountService {
    private readonly accountRepository;
    private readonly accountFactory;
    constructor(accountRepository: BaseAccountRepository, accountFactory: accountFactory);
    createAccount(isBankManager: boolean, type: typeAccount, accountNumber: string, amount: number, initDate: string): Promise<currentAccount | poupancaAccount>;
    findAccountById(id: string): Promise<currentAccount | poupancaAccount>;
    updateAccountById(id: string, accountNumber: string, amount: number, initDate: string): Promise<currentAccount | poupancaAccount>;
    deactivateAccountById(id: string): Promise<currentAccount | poupancaAccount>;
    deposit(accountId: string, amount: number): Promise<void>;
    withdraw(accountId: string, amount: number): Promise<void>;
    transfer(fromAccountId: string, toAccountId: string, amount: number): Promise<void>;
}
