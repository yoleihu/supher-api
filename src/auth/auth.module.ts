import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GuardianModule } from 'src/guardian/guardian.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { BloodCenterModule } from 'src/blood-center/blood-center.module';
import { JwtStrategy } from './jwt.strategy';
import { TokenModule } from 'src/token/token.module';
import { PetModule } from 'src/pet/pet.module';
import { AppointmentModule } from 'src/appointment/appointment.module';
import { AlertModule } from 'src/alert/alert.module';

@Module({
  imports: [GuardianModule,
    PetModule,
    AppointmentModule,
    AlertModule,
    BloodCenterModule,
    TokenModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '180s' },
    }),],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[JwtModule, AuthService]
})
export class AuthModule {}
