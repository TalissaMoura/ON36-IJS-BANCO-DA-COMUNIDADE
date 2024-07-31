import { Module } from '@nestjs/common';
import { AppController } from './currentAccount.controller';
import { AppService } from './currentAccount.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
