import { Body, Get, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Agendamento } from './entities/agendamento.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
  ) { }


  async createAgendamento(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    return await this.agendamentoRepository.save(createAgendamentoDto);
  }


  async findAllAgendamento(): Promise<Agendamento[]> {
    const agendamento = await this.agendamentoRepository.find();
    if (agendamento.length === 0) {
      throw new HttpException('Nenhum agendamento encontrado', HttpStatus.NOT_FOUND);
    }
    return await agendamento;
  }

  async findOneAgendamento(id: string): Promise<Agendamento> {
    const agendamento = await this.agendamentoRepository.findOneBy({ id: id });
    if (!agendamento) {
      throw new Error('Agendamento não encontrado');
    }
    return agendamento;
  }

  async removeAgendamento(id: string): Promise<DeleteResult> {
    const result = this.agendamentoRepository.delete(id);
    if ((await result).affected === 0) {
      throw new HttpException('Agendamento não encontrado', HttpStatus.NOT_FOUND);
    }
    return result;

  }
}
