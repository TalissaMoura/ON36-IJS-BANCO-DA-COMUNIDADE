import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankManagerModule } from './bankManager/bankManager.module';
import { bankManagerController } from './bankManager/bankManager.controller';
import { bankManagerService } from './bankManager/bankManager.service';

@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [BankManagerModule],
})
export class AppModule {}
