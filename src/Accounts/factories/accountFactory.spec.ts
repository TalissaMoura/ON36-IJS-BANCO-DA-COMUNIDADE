import currentAccount from "../creators/currentAccount.model"
import poupancaAccount from "../creators/poupancaAccount.model"
import accountFactory from "./accountFactory.model"
import { typeAccount } from "../../enum/account.enum"
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid', () => ({
    v4: jest.fn(),
  }));

describe("accountFactory tests",()=>{
    const factory = new accountFactory();
    const mockUuid = '123e4567-e89b-12d3-a456-426614174000';
    (uuidv4 as jest.Mock).mockReturnValue(mockUuid);
    const ccAccount = new currentAccount(100,"2023-11-13")
    const paAccount = new poupancaAccount(150,"2021-12-28")
    test("should return an currentAccount object", () =>{
        (uuidv4 as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(true,typeAccount.CURRENT,100,"2023-11-13")).toMatchObject(ccAccount)
    })

    test("should return an poupancaAccount object", () =>{
        (uuidv4 as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(true,typeAccount.POUPANCA,150,"2021-12-28")).toMatchObject(paAccount)
    })

    test.failing("should fail when bankManager don't create account ", () => {
        (uuidv4 as jest.Mock).mockReturnValue(mockUuid);
        expect(factory.createAccount(false,typeAccount.POUPANCA,100,"2022-3-14")).toBeInstanceOf(poupancaAccount)
    })

}
)
