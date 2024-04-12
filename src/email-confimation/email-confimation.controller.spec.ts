import { Test, TestingModule } from '@nestjs/testing';
import { EmailConfimationController } from './email-confimation.controller';

describe('EmailConfimationController', () => {
  let controller: EmailConfimationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailConfimationController],
    }).compile();

    controller = module.get<EmailConfimationController>(EmailConfimationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
