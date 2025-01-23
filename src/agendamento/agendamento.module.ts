import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Petshop } from 'src/petshop/entities/petshop.entity';
import { Servico } from 'src/servico/entities/servico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento, Cliente, Petshop, Servico])],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
})
export class AgendamentoModule {}


