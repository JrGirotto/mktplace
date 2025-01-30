import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { Pet } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), ClienteModule],
  controllers: [PetController],
  providers: [PetService],
  exports: [TypeOrmModule]
})
export class PetModule { }
