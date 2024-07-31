import { Module } from '@nestjs/common';
import { AppController } from './clientAccount.controller';
import { AppService } from './clientAccount.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
