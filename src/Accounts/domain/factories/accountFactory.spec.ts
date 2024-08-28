import currentAccount from "../currentAccount.model"
import poupancaAccount from "../poupancaAccount.model"
import accountFactory from "./accountFactory.model"
import { typeAccount } from "../../../enum/account.enum"
import { randomUUID } from "crypto"

jest.mock("crypto")

describe("accountFactory tests",()=>{
    const factory = new accountFactory()
    const mockUuid = '123e4567-e89b-12d3-a456-426614174000';
    (randomUUID as jest.Mock).mockReturnValue(mockUuid);

    const CCTest = {
        _accountId : mockUuid,
        _balance : 100.0,
        _accountNumber : "2345",
        _initDate: "2023-11-12",
        _isActive: true,
        _limitChequeEspecial: 150.0
    } as currentAccount

    const PTest = {
        _accountId : mockUuid,
        _balance : 120.0,
        _accountNumber : "2347",
        _initDate: "2023-11-11",
        _isActive: true,
        _rendimento: 0.1
    } as poupancaAccount

    test("should return an currentAccount object", () =>{
        (randomUUID as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(true,typeAccount.CURRENT,"2345",100.0,"2023-11-12")).toMatchObject(CCTest)
    })

    test("should return an poupancaAccount object", () =>{
        (randomUUID as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(true,typeAccount.POUPANCA,"2347",120.0,"2023-11-11")).toMatchObject(PTest)
    })

    test.failing("should fail when bankManager don't create account ", () => {
        (randomUUID as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(false,typeAccount.POUPANCA,"2347",120.0,"2022-3-14")).toBeInstanceOf(poupancaAccount)
    })

}
)
