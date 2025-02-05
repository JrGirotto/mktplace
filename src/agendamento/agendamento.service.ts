import { BadRequestException, Body, Get, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { AgendamentoStatus } from './agendamento-status-enum';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { HorarioFuncionamento } from 'src/horario-funcionamento/entities/horario_funcionamento.entity';
import { Petshop } from 'src/petshop/entities/petshop.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
    @InjectRepository(Petshop)
    private readonly petshopRepository: Repository<Petshop>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(HorarioFuncionamento)
    private readonly horarioRepository: Repository<HorarioFuncionamento>,
  ) { }


  async create(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    const { cliente_id, petshop_id, data_hora_agendamento } = createAgendamentoDto;

    // Converta a string de data para uma instância de Date
    const horaAgendamento = data_hora_agendamento.split(' ')[1];
    const diaSemana = new Date(data_hora_agendamento).toLocaleString('pt-BR', { weekday: 'long' }).toLowerCase()

    // Verificar se o horário está disponível no petshop
    const disponivel = await this.isHorarioDisponivel(petshop_id, data_hora_agendamento);
    if (!disponivel) {
      throw new BadRequestException('Petshop não está disponível nesse horário.');
    }

    // Verificar se o cliente existe
    const cliente = await this.clienteRepository.findOne({ where: { id: cliente_id } });
    if (!cliente) {
      throw new BadRequestException('Cliente não encontrado.');
    }

    // Verificar se o petshop existe
    const petshop = await this.petshopRepository.findOne({ where: { id: petshop_id } });
    if (!petshop) {
      throw new BadRequestException('Petshop não encontrado.');
    }

    const agendamento = this.agendamentoRepository.create({
      cliente: cliente,
      petshop: petshop,
      data_hora_agendamento: data_hora_agendamento,
      status: AgendamentoStatus.AGENDADO,
    });
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

  //      where: { petshop: { id: petshopId } },
  async isHorarioDisponivel(petshopId: string, dataAgendamento: string): Promise<boolean> {
    // Buscar os horários cadastrados do petshop
    const horarioFuncionamento = await this.horarioRepository.findOne({
      where: { petshop: { id: petshopId } },
    });

    // Verificar se o petshop tem horários cadastrados
    if (!horarioFuncionamento || !horarioFuncionamento.horarios) {
      throw new Error('Petshop não possui horários cadastrados.');
    }

    // Converter a data de agendamento para um objeto Date
    const data = new Date(dataAgendamento);
    if (isNaN(data.getTime())) {
      throw new Error('Data de agendamento inválida.');
    }

    // Extrair o dia da semana (0 = Domingo, 6 = Sábado)
    const diaSemana = data.getDay().toString();

    // Obter os horários de funcionamento para o dia específico
    const horarioDia = horarioFuncionamento.horarios[diaSemana];

    if (!horarioDia) {
      throw new Error('Petshop não possui horários cadastrados para esse dia da semana.');
    }

    // Extrair o horário do agendamento no formato "HH:mm"
    const horaAgendamento = data.toISOString().split('T')[1].substring(0, 5); // Pega apenas HH:mm

    // Comparar com os horários de abertura e fechamento
    return horaAgendamento >= horarioDia.abertura && horaAgendamento <= horarioDia.fechamento;
  }


}






