import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BloodCenterModule } from './blood-center/blood-center.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), BloodCenterModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
