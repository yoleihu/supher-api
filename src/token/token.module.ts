import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokenRepository } from './token.repository';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { GuardianModule } from 'src/guardian/guardian.module';
import { BloodCenterModule } from 'src/blood-center/blood-center.module';


@Module({
  imports: [forwardRef(() => AuthModule), GuardianModule, BloodCenterModule],
  controllers:[TokenController],
  providers: [PrismaService, TokenRepository, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
