import currentAccount from '../../../domain/currentAccount.model';
import poupancaAccount from '../../../domain/poupancaAccount.model';
import { AccountsEntity } from '../entity/accounts.entity';
export declare class AccountsMapper {
    static forDomain(accountEntity: AccountsEntity): currentAccount | poupancaAccount;
    static forPersistence(account: currentAccount | poupancaAccount): AccountsEntity;
}
