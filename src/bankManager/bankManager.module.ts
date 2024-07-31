import { Module } from '@nestjs/common';
import { bankManagerController } from './bankManager.controller';
import { bankManagerService } from './bankManager.service';

@Module({
  controllers: [bankManagerController],
  providers: [bankManagerService],
  exports: [bankManagerService]
})
export class BankManagerModule {}
