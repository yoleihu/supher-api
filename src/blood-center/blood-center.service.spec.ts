import { Test, TestingModule } from '@nestjs/testing';
import { BloodCenterService } from './blood-center.service';

describe('BloodCenterService', () => {
  let service: BloodCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodCenterService],
    }).compile();

    service = module.get<BloodCenterService>(BloodCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
