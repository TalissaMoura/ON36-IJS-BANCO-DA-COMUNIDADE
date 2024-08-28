import { Injectable, UnauthorizedException } from '@nestjs/common';
import { typeAccount } from '../../../enum/account.enum';
import currentAccount from '../currentAccount.model';
import poupancaAccount from '../poupancaAccount.model';
import { randomUUID } from 'crypto';

@Injectable()
export default class accountFactory {
    private validateOperation(isBankManager:boolean){
        if(!isBankManager){
            return false
        }
        return true
    }

    createAccount(isBankManager:boolean,
                  type:typeAccount,
                  accountNumber:string,
                  amount:number,
                  initDate:string){
        if(!this.validateOperation(isBankManager)){
            throw new UnauthorizedException(`Invalid operation`)
        }
        
        switch(type){
            case typeAccount.CURRENT:
                const isActiveCC = true
                const idCC = randomUUID()
                const limitChequeEspecialInicial = 150.0
                const ccAccount = new currentAccount(idCC,accountNumber,amount,initDate,limitChequeEspecialInicial,isActiveCC)
                return ccAccount
            case typeAccount.POUPANCA:
                const isActiveP = true
                const idP = randomUUID()
                const rendimentoInicial = 0.1
                const pAccount = new poupancaAccount(idP,accountNumber,amount,initDate,rendimentoInicial,isActiveP)
                return pAccount
        }
    }

}