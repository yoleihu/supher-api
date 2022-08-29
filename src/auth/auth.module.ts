import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GuardianModule } from 'src/guardian/guardian.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [GuardianModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, LocalStrategy],
  exports:[JwtModule, AuthService]
})
export class AuthModule {}
