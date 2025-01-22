import { Test, TestingModule } from '@nestjs/testing';
import { PetshopController } from './petshop.controller';
import { PetshopService } from './petshop.service';

describe('PetshopController', () => {
  let controller: PetshopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetshopController],
      providers: [PetshopService],
    }).compile();

    controller = module.get<PetshopController>(PetshopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
