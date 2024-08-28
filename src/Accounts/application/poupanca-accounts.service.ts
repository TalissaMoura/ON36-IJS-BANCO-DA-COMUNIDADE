import { Inject, Injectable } from "@nestjs/common";
import { AccountRepository } from "../adapters/persistence/accounts.repository";
import poupancaAccount from "../domain/poupancaAccount.model";
import { BaseAccountService } from "./baseAccounts.service";
import { IPoupancaAccountUseCases } from "./ports/in/poupanca-account.use-cases";
import accountFactory from "../domain/factories/accountFactory.model";
import { BaseAccountRepository } from "./ports/out/accounts.repository";

@Injectable()
export class PoupancaAccountsService extends BaseAccountService implements IPoupancaAccountUseCases {
  constructor(
    private readonly accountRepositoryP: AccountRepository,
    private readonly accountFactoryP: accountFactory
  ) {
    super(accountRepositoryP,accountFactoryP)
  }

  async setRendimento(accountId: string, rendimento: number): Promise<poupancaAccount> {
        const account = await this.accountRepositoryP.searchById(accountId) as poupancaAccount;
        if (!account) throw new Error('Account not found');
        account.setRendimento(rendimento);
        const updatedAccount = await this.accountRepositoryP.save(account)
        return updatedAccount as poupancaAccount
    }
}