import { Test, TestingModule } from '@nestjs/testing';
import { BloodCenterController } from './blood-center.controller';
import { BloodCenterService } from './blood-center.service';

describe('BloodCenterController', () => {
  let controller: BloodCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodCenterController],
      providers: [BloodCenterService],
    }).compile();

    controller = module.get<BloodCenterController>(BloodCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
