import { Module } from '@nestjs/common';
import { AppController } from './client.controller';
import { AppService } from './client.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
