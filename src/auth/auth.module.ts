import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GuardianModule } from 'src/guardian/guardian.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [GuardianModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
