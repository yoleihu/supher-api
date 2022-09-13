import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTokenDto } from './dto/token.dto';
import { Token } from './token.entity';

@Injectable()
export class TokenRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTokenDto: CreateTokenDto): Promise<Token> {
    return this.prisma.token.create({
      data: createTokenDto
    })
  }

  findOne(username: string): Promise<Token> {
    return this.prisma.token.findUnique({
      where: {
        username,
      },
    });
  }

  findOneByHash(hash: string): Promise<Token> {
    return this.prisma.token.findUnique({
      where: {
        hash,
      },
    });
  }

  async update(username: string, createTokenDto: CreateTokenDto): Promise<Token> {
    return this.prisma.token.update({
      where: {
        username,
      },
      data: createTokenDto,
    })
  }

  delete(username: string){
    this.prisma.token.delete(
      {
        where: {
          username,
        },
      }
    )
  }
}
