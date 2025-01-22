import { Module } from '@nestjs/common';
import { PetshopService } from './petshop.service';
import { PetshopController } from './petshop.controller';

@Module({
  controllers: [PetshopController],
  providers: [PetshopService],
})
export class PetshopModule {}
