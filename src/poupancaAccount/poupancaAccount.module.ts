import { Module } from '@nestjs/common';
import { AppController } from './poupancaAccount.controller';
import { AppService } from './poupancaAccount.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
