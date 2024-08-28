import currentAccount from "../../domain/currentAccount.model";
import { BaseAccountRepository } from "../../application/ports/out/accounts.repository";
import poupancaAccount from "../../domain/poupancaAccount.model";
export declare class AccountRepository extends BaseAccountRepository {
    private readonly accounts;
    save(account: currentAccount | poupancaAccount): Promise<currentAccount | poupancaAccount>;
    searchById(id: string): Promise<currentAccount | poupancaAccount | null>;
    updateById(id: string, accountNumber: string, amount: number, initDate: string): Promise<currentAccount | poupancaAccount>;
    deleteById(id: string): Promise<currentAccount | poupancaAccount>;
}
