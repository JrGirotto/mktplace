import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetshopService } from './petshop.service';
import { PetshopController } from './petshop.controller';
import { Petshop } from './entities/petshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Petshop]), PetshopModule],
  controllers: [PetshopController],
  providers: [PetshopService],
  exports: [TypeOrmModule],
})
export class PetshopModule {}
