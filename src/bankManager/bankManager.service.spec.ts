import { Test, TestingModule } from '@nestjs/testing';
import { bankManagerService } from './bankManager.service';

describe('bankManagerService', () => {
  let service: bankManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [bankManagerService],
    }).compile();

    service = module.get<bankManagerService>(bankManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});