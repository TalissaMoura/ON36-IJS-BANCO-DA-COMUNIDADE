import { Test, TestingModule } from '@nestjs/testing';
import { CurrentAccountsService } from './current-accounts.service';
import { typeAccount } from '../../enum/account.enum';
import { AccountRepository } from '../adapters/persistence/accounts.repository';
import { randomUUID } from "crypto"
import { BaseAccountService } from './baseAccounts.service';
import accountFactory from '../domain/factories/accountFactory.model';
import { BaseAccountRepository } from './ports/out/accounts.repository';
import { PoupancaAccountsService } from './poupanca-accounts.service';
import { AppModule } from '../../app.module';
import { AccountsModule } from './accounts.module';

jest.mock("crypto")


describe('CurrentAccountService', () => {
  let service: CurrentAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
     providers : [CurrentAccountsService]
    }).compile();

    service = module.get<CurrentAccountsService>(CurrentAccountsService);

  });

  test("service should be defined",() =>{
    console.log(module)
    expect(service).toBeDefined()
  })

  // test('should return a new Current Account', () => {
  //   const mockUuid = '123e4567-e89b-12d3-a456-426614174000';
  //   (randomUUID as jest.Mock).mockReturnValue(mockUuid);
  //   const account = service.createAccount(true,typeAccount.CURRENT,"2345",450,"2024-2-3")
  //   expect(account).toHaveProperty("_balance",450);
  //   expect(account).toHaveProperty("_accountNumber","2345")
  //   expect(account).toHaveProperty("_initDate","2024-2-3");
  // });
  // test('should find a Current Account by ID', () => {
  //   const mockUuid = '3948';
  //   (randomUUID as jest.Mock).mockReturnValue(mockUuid);
  //   const newAccount = service.createAccount(true,typeAccount.CURRENT,"2323",560,"2022-2-3")
  //   const account = service.findAccountById(mockUuid)
  //   expect(account).toMatchObject(newAccount) 
  // });
  // test('should update a Current Account by ID', () => {
  //   const mockUuid = '2345';
  //   (randomUUID as jest.Mock).mockReturnValue(mockUuid);
  //   const account = service.createAccount(true,typeAccount.CURRENT,"2334",235,"2024-4-3")
  //   const updatedAccount = service.updateAccountById(mockUuid,"2334",340,"2024-4-3")
  //   expect(updatedAccount).toHaveProperty("_accountID",mockUuid) 
  //   expect(updatedAccount).toHaveProperty("_balance",340) 
  //   expect(updatedAccount).toHaveProperty("_initDate","2024-4-3") 
  //   expect(updatedAccount).toHaveProperty("_accountNumber","2334")
  // });
  // test('deactivate a Current Account by ID', () => {
  //   const mockUuid = '4356';
  //   (randomUUID as jest.Mock).mockReturnValue(mockUuid);
  //   const account = service.createAccount(true,typeAccount.CURRENT,"5456",235,"2024-12-3")
  //   const deactivateAccount = service.deactivateAccountById(mockUuid)
  //   expect(deactivateAccount).toHaveProperty("_accountID",mockUuid) 
  //   expect(deactivateAccount).toHaveProperty("_isActive",false) 
  // });

});
