import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { typeAccount } from '../enum/account.enum';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  test('should return a new Current Account', () => {
    const account = service.createAccount(true,typeAccount.CURRENT,450,"2024-2-3")
    expect(account).toHaveProperty("_amount",450);
    expect(account).toHaveProperty("_initDate","2024-2-3");
  });
  test('should find a Current Account by ID', () => {
    const account = service.findCurrentAccountById("408f683e-65dd-449b-b753-e019402ad645")
    expect(account).toHaveProperty("_accountID","408f683e-65dd-449b-b753-e019402ad645") 
  });
  test('should update a Current Account by ID', () => {
    const account = service.updateCurrentAccountById("408f683e-65dd-449b-b753-e019402ad645",230,"2023-5-25")
    expect(account).toHaveProperty("_accountID","408f683e-65dd-449b-b753-e019402ad645") 
    expect(account).toHaveProperty("_amount",230) 
    expect(account).toHaveProperty("_initDate","2023-5-25") 
    expect(account).toHaveProperty("_accountNumber","7eede4ad-36ed-44d8-9eee-10df54e6852d")
  });
  test('deactivate a Current Account by ID', () => {
    const account = service.deactivateCurrentAccountById("c6640507-e052-4053-b079-ca7ac61a2c7d")
    expect(account).toHaveProperty("_accountID","c6640507-e052-4053-b079-ca7ac61a2c7d") 
    expect(account).toHaveProperty("_isActive",false) 
  });

  test('should return a new poupanca account', () => {
    const account = service.createAccount(true,typeAccount.POUPANCA,567,"2023-6-15")
    expect(account).toHaveProperty("_amount",567);
    expect(account).toHaveProperty("_initDate","2023-6-15");
  });
  test('should find a poupanca Account by ID', () => {
    const account = service.findPoupancaAccountById("2c6c8f26-36cd-446b-951c-0e039cbfad14")
    expect(account).toHaveProperty("_accountID","2c6c8f26-36cd-446b-951c-0e039cbfad14") 
  });
  test('should update a poupanca Account by ID', () => {
    const account = service.updatePoupancaAccountById("6ce73870-ead1-4807-907e-73d1f6fed7fa",340,"2022-8-6")
    expect(account).toHaveProperty("_accountID","6ce73870-ead1-4807-907e-73d1f6fed7fa") 
    expect(account).toHaveProperty("_amount",340) 
    expect(account).toHaveProperty("_initDate","2022-8-6") 
  });
  test('deactivate a poupanca Account by ID', () => {
    const account = service.deactivatePoupancaAccountById("6ce73870-ead1-4807-907e-73d1f6fed7fa")
    expect(account).toHaveProperty("_accountID","6ce73870-ead1-4807-907e-73d1f6fed7fa") 
    expect(account).toHaveProperty("_isActive",false) 
  });
});
