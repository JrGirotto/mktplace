import { Module } from '@nestjs/common';
import { PetshopController } from './controllers/petshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Petshop } from './entities/petshop.entity';
import { PetshopServicoController } from './controllers/petshop-servico.controller';
import { PetshopServicoService } from './services/petshop-servico.service';
import { PetshopService } from './services/petshop.service';

@Module({
  imports: [TypeOrmModule.forFeature([Petshop]), PetshopModule],
  controllers: [PetshopController],
  providers: [PetshopService],
  exports: [TypeOrmModule],
})
export class PetshopModule {}
