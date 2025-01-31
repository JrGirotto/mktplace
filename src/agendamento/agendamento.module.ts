import { Module } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { AgendamentoController } from './agendamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento]),],
  controllers: [AgendamentoController],
  providers: [AgendamentoService],
  exports: [TypeOrmModule]
})
export class AgendamentoModule {}


