import { Body, Get, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { AgendamentoStatus } from './agendamento-status-enum';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
  ) { }


  async create(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    const agendamento = this.agendamentoRepository.create(createAgendamentoDto);
    agendamento.status = AgendamentoStatus.AGENDADO;
    return await this.agendamentoRepository.save(agendamento);
  }


  async findAll(): Promise<Agendamento[]> {
    const agendamento = this.agendamentoRepository.find();
    if ((await agendamento).length === 0) {
      throw new HttpException('Nenhum agendamento encontrado', HttpStatus.NOT_FOUND);
    }
    return agendamento;
  }

  async findOne(id: string): Promise<Agendamento> {
    const agendamento = await this.agendamentoRepository.findOneBy({ id_agendamento: id });
    if (!agendamento) {
      throw new HttpException('Agendamento não encontrado', HttpStatus.NOT_FOUND);
    }
    return agendamento;
  }

  async remove(id: string): Promise<DeleteResult> {
    const result = this.agendamentoRepository.delete(id);
    if ((await result).affected === 0) {
      throw new HttpException('Agendamento não encontrado', HttpStatus.NOT_FOUND);
    } else {
      throw new HttpException('Agendamento removido com sucesso', HttpStatus.OK);
    }


  }
}
