import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { HorarioFuncionamento } from 'src/horario-funcionamento/entities/horario_funcionamento.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Petshop } from 'src/petshop/entities/petshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento, HorarioFuncionamento, Petshop, Cliente]),],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
  exports: [TypeOrmModule]
})
export class AgendamentoModule {}


