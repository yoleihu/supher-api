import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { GuardianModule } from "./guardian/guardian.module";
import { AppService } from "./app.service";
import { BloodCenterModule } from './blood-center/blood-center.module';

@Module({
  imports: [ConfigModule.forRoot(), GuardianModule, BloodCenterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
