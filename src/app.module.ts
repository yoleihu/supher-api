import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { GuardianModule } from './guardian/guardian.module';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), GuardianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
