import { Module } from "@nestjs/common";
import { AccountRepository } from "../adapters/persistence/accounts.repository";
import accountFactory from "../domain/factories/accountFactory.model";
import { CurrentAccountsService } from "./current-accounts.service";
import { currentAccountController } from "../adapters/http/currentAccount.controller";
import { poupancaAccountController } from "../adapters/http/poupancaAccount.controller";
import { PoupancaAccountsService } from "./poupanca-accounts.service";

@Module({
    providers: [
        AccountRepository,  // Provides the concrete implementation
        CurrentAccountsService,
        PoupancaAccountsService,
        accountFactory,
        // other providers
    ],
    controllers : [currentAccountController,poupancaAccountController],
    exports: [CurrentAccountsService,PoupancaAccountsService],  // If you need to use it in other modules
})
export class AccountsModule {}