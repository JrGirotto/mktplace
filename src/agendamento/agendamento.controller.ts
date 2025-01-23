import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Controller('agendamento')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()
  create(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    return this.agendamentoService.createAgendamento(createAgendamentoDto);
  }

  @Get()
  findAll() {
    return this.agendamentoService.findAllAgendamento();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agendamentoService.findOneAgendamento(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendamentoService.removeAgendamento(id);
  }
}
