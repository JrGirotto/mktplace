import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Petshop } from 'src/petshop/entities/petshop.entity';
import { Servico } from 'src/servico/entities/servico.entity';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento]),],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
  exports: [TypeOrmModule]
})
export class AgendamentoModule {}


