import currentAccount from "../../domain/currentAccount.model";
import { BaseAccountRepository } from "../../application/ports/out/accounts.repository";
import poupancaAccount from "../../domain/poupancaAccount.model";
import { AccountsEntity } from "./entity/accounts.entity";
import { AccountsMapper } from "./mappers/accounts.mapper";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AccountRepository extends BaseAccountRepository {
    private readonly accounts = new Map<string,AccountsEntity>()

    async save(account:currentAccount|poupancaAccount): Promise<currentAccount|poupancaAccount>{
        const persistenceModel = AccountsMapper.forPersistence(account);
        this.accounts.set(persistenceModel.id, persistenceModel);
        const newEntity = this.accounts.get(persistenceModel.id);
        return AccountsMapper.forDomain(newEntity);
    }
    async searchById(id:string): Promise<currentAccount|poupancaAccount|null>{
        const entities = Array.from(this.accounts.values());
        const accounts = entities.find((item) => item.id === id);
        if (!accounts) {
          return null;
        }
        return AccountsMapper.forDomain(accounts);
    }

    async updateById(id: string, accountNumber:string, amount: number, initDate: string): Promise<currentAccount | poupancaAccount> {
        const findAccount = await this.searchById(id)
        if(!findAccount){
            throw new UnauthorizedException("Invalid operation")
        }

        findAccount._accountNumber = accountNumber
        findAccount._balance = amount 
        findAccount._initDate = initDate

        const updatedAccount = await this.save(findAccount)

        return updatedAccount

    }

    async deleteById(id: string): Promise<currentAccount | poupancaAccount> {
        const findAccount = await this.searchById(id)
        if(!findAccount){
            throw new UnauthorizedException("Invalid operation")
        }

        findAccount._isActive = false 

        const updatedAccount = await this.save(findAccount)

        return updatedAccount
    }
}