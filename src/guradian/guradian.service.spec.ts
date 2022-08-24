import { Test, TestingModule } from '@nestjs/testing';
import { GuradianService } from './guradian.service';

describe('GuradianService', () => {
  let service: GuradianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuradianService],
    }).compile();

    service = module.get<GuradianService>(GuradianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
