import { typeAccount } from "../../../../enum/account.enum"

export class AccountsEntity {
    id: string
    accountNumber:string
    amount: number
    isActive: boolean
    initDate:string
    type: typeAccount
    limitChequeEspecial: number 
    rendimento: number
}