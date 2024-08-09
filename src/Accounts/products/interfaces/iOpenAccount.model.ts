import iAccount from "src/Accounts/factories/iAccount.model";

export default interface iOpenAccount {

    create(accountNumber:string,
          amount:number,
          initDate:string):iAccount
}