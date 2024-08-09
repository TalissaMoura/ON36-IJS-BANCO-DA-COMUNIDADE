import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { randomUUID } from 'crypto';
import { ParseUUIDPipe } from '@nestjs/common';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  test('should return a new Current Account', () => {
    const account = service.createCurrentAccounts(true,"2324",200,"2023-4-17")
    expect(account).toHaveProperty("_amount",200);
    expect(account).toHaveProperty("_accountNumber","2324");
    expect(account).toHaveProperty("_initDate","2023-4-17");
  });
  test('should find a Current Account by ID', () => {
    const account = service.findCurrentAccountById("408f683e-65dd-449b-b753-e019402ad645")
    expect(account).toHaveProperty("_accountID","408f683e-65dd-449b-b753-e019402ad645") 
  });
  test('should update a Current Account by ID', () => {
    const account = service.updateCurrentAccount("408f683e-65dd-449b-b753-e019402ad645",800,"2023-5-25","9841")
    expect(account).toHaveProperty("_accountID","408f683e-65dd-449b-b753-e019402ad645") 
    expect(account).toHaveProperty("_amount",800) 
    expect(account).toHaveProperty("_initDate","2023-5-25") 
    expect(account).toHaveProperty("_accountNumber","9841")
  });
  test('deactivate a Current Account by ID', () => {
    const account = service.deactivateCurrentAccountById("c6640507-e052-4053-b079-ca7ac61a2c7d")
    expect(account).toHaveProperty("_accountID","c6640507-e052-4053-b079-ca7ac61a2c7d") 
    expect(account).toHaveProperty("_isActive",false) 
  });

  test('should return a new poupanca account', () => {
    const account = service.createPoupancaAccount(true,"8965",256,"2023-7-21")
    expect(account).toHaveProperty("_amount",256);
    expect(account).toHaveProperty("_accountNumber","8965");
    expect(account).toHaveProperty("_initDate","2023-7-21");
  });
  test('should find a poupanca Account by ID', () => {
    const account = service.findPoupancaAccountById("dd8d8b0a-dd24-4920-a19e-0aa5d3424471")
    expect(account).toHaveProperty("_accountID","dd8d8b0a-dd24-4920-a19e-0aa5d3424471") 
  });
  test('should update a poupanca Account by ID', () => {
    const account = service.updatePoupancaAccount("6ce73870-ead1-4807-907e-73d1f6fed7fa",400,"2022-8-6","5478")
    expect(account).toHaveProperty("_accountID","6ce73870-ead1-4807-907e-73d1f6fed7fa") 
    expect(account).toHaveProperty("_amount",400) 
    expect(account).toHaveProperty("_initDate","2022-8-6") 
    expect(account).toHaveProperty("_accountNumber","5478")
  });
  test('deactivate a poupanca Account by ID', () => {
    const account = service.deactivatePoupancaAccountById("7a5f9a53-a5f9-470b-b6f5-f3d67ee51c81")
    expect(account).toHaveProperty("_accountID","7a5f9a53-a5f9-470b-b6f5-f3d67ee51c81") 
    expect(account).toHaveProperty("_isActive",false) 
  });
});
