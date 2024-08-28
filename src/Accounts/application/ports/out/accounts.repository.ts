import currentAccount from "src/Accounts/domain/currentAccount.model";
import poupancaAccount from "src/Accounts/domain/poupancaAccount.model";

export abstract class BaseAccountRepository {
   abstract save(account:currentAccount|poupancaAccount): Promise<currentAccount|poupancaAccount>
   abstract searchById(id:string): Promise<currentAccount|poupancaAccount|null>
   abstract updateById(id:string,accountNumber:string,amount: number, initDate: string): Promise<currentAccount|poupancaAccount>
   abstract deleteById(id:string): Promise<currentAccount|poupancaAccount>

}