import { Module } from '@nestjs/common';
import { PetshopService } from './petshop.service';
import { PetshopController } from './petshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Petshop } from './entities/petshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Petshop])],
  controllers: [PetshopController],
  providers: [PetshopService],
})
export class PetshopModule {}
