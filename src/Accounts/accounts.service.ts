import { Injectable } from '@nestjs/common';
import currentAccount from './creators/currentAccount.model';
import PoupancaAccount from 'backup/modules/Accounts/poupancaAccount';

@Injectable()
export class AccountsService {
    constructor(
        currentAccountFactory: currentAccount
    ){}

}
