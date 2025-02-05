import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { Agendamento } from './entities/agendamento.entity';

@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()

  async create(@Body() createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    return this.agendamentoService.create(createAgendamentoDto);
  }

  @Get()
  findAll() {
    return this.agendamentoService.findAll();

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendamentoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendamentoService.remove(id);
  }
}
