import { Controller, Param, Body, Post, Put, Get } from '@nestjs/common';
import { HorarioFuncionamentoService } from './horario-funcionamento.service'; // Ajuste para o caminho correto

@Controller('horario-funcionamento')
export class HorarioFuncionamentoController {
    constructor(
        private readonly horarioService: HorarioFuncionamentoService,
    ) { }

    // Atualizar horários de funcionamento de um petshop
    @Put(':petshopId')
    async atualizarHorarios(
        @Param('petshopId') petshopId: string,
        @Body() horarios: Record<string, { abertura: string, fechamento: string }>,
    ) {
        return this.horarioService.atualizarHorarios(petshopId, horarios);
    }

    // Obter horários de funcionamento de um petshop
    @Get(':petshopId')
    async obterHorarios(@Param('petshopId') petshopId: string) {
        return this.horarioService.obterHorarios(petshopId);
    }
}
