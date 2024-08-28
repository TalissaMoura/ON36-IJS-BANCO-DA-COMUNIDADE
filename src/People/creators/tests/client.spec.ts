import { UnauthorizedException } from "@nestjs/common";
import Client from "../client.model";
import createClient from "../../products/Client/createClient.model";
import deactivateClient from "../../products/Client/deactivateClient.model";
import poupancaAccount from "src/Accounts/domain/poupancaAccount.model";
import currentAccount from "src/Accounts/domain/currentAccount.model";

describe("Client create products tests",()=>{
    const account: Client  = new Client()
    test("should return an createClient object", () =>{
        expect(account.createAccount()).toBeInstanceOf(createClient)
    })
    test("should return an deactivateClient object", () => {
        expect(account.deactivateAccount()).toBeInstanceOf(deactivateClient)
    })
    test("should add a currentAccount to ClientAccount",()=>{
        const newOpenAccount = account.createAccount()
        const newClient = newOpenAccount.create("Talissa","67274623409")
        const testCurrentAccount = {
        "_accountID": "0274df42-c84b-4ad9-a8b1-3ade35cc6f1e",
        "_amount": 500,
        "_isActive": true,
        "_initDate": "2023-4-17",
        "_accountNumber": "2323"
        } as currentAccount

        newClient.addCurrentAccount(testCurrentAccount)

        expect(newClient._currentAccount[0]).toStrictEqual(testCurrentAccount)

    })
    test("should add a poupancaAccount to ClientAccount",()=>{
        const newOpenAccount = account.createAccount()
        const newClient = newOpenAccount.create("Talissa","67274623409")
        const testPoupancaAccount = {
        "_accountID": "5149df42-c84b-4ad9-a8b1-3ade35cc6f1e",
        "_amount": 748,
        "_isActive": true,
        "_initDate": "2022-9-17",
        "_accountNumber": "3147"
        } as poupancaAccount

        newClient.addPoupancaAccount(testPoupancaAccount)

        expect(newClient._poupancaAccount[0]).toStrictEqual(testPoupancaAccount)

    })
   
})