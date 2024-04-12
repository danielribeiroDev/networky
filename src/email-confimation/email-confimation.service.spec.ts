import { Test, TestingModule } from '@nestjs/testing';
import { EmailConfimationService } from './email-confimation.service';

describe('EmailConfimationService', () => {
  let service: EmailConfimationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailConfimationService],
    }).compile();

    service = module.get<EmailConfimationService>(EmailConfimationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
