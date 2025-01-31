import { Module } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { ServicoController } from './servico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from './entities/servico.entity';
import { Petshop } from 'src/petshop/entities/petshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servico, Petshop])],
  controllers: [ServicoController],
  providers: [ServicoService],
  exports: [TypeOrmModule]
})
export class ServicoModule {}
