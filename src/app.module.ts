import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuradianService } from './guradian/guradian.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, GuradianService, PrismaService],
})
export class AppModule {}
