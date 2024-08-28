import { typeAccount } from '../../../../enum/account.enum';
import currentAccount from '../../../domain/currentAccount.model';
import poupancaAccount from '../../../domain/poupancaAccount.model';
import { AccountsEntity } from '../entity/accounts.entity';
import { UnauthorizedException } from '@nestjs/common';

export class AccountsMapper {
  static forDomain(accountEntity: AccountsEntity): currentAccount | poupancaAccount {
   const type = accountEntity.type
   switch(type) {
    case typeAccount.CURRENT:
        return new currentAccount(
            accountEntity.id,
            accountEntity.accountNumber,
            accountEntity.amount,
            accountEntity.initDate,
            accountEntity.limitChequeEspecial,
            accountEntity.isActive
        )
    case typeAccount.POUPANCA:
        return new poupancaAccount(
            accountEntity.id,
            accountEntity.accountNumber,
            accountEntity.amount,
            accountEntity.initDate,
            accountEntity.rendimento,
            accountEntity.isActive
        )
   }
  }

  static forPersistence(account: currentAccount | poupancaAccount): AccountsEntity {
    const entity = new AccountsEntity();

    if (!(account instanceof currentAccount) && !(account instanceof poupancaAccount)){
        throw new UnauthorizedException("Invalid operation!")
    }

    else if (account instanceof currentAccount){
        const zeroRendimento = 0.0
        entity.id = account._accountId
        entity.accountNumber = account._accountNumber
        entity.limitChequeEspecial = account._limitChequeEspecial
        entity.rendimento = zeroRendimento
        entity.initDate = account._initDate
        entity.isActive = account._isActive
    }
    else if (account instanceof poupancaAccount){
        const zeroLimit = 0.0
        entity.id = account._accountId
        entity.accountNumber = account._accountNumber
        entity.limitChequeEspecial = zeroLimit
        entity.rendimento = account._rendimento
        entity.initDate = account._initDate
        entity.isActive = account._isActive
    }
    return entity
  }
}