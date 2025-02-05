import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Petshop } from 'src/petshop/entities/petshop.entity';
import { HorarioFuncionamento } from './entities/horario_funcionamento.entity'; // Ajuste para o caminho correto

@Injectable()
export class HorarioFuncionamentoService {
    constructor(
        @InjectRepository(HorarioFuncionamento)
        private readonly horarioRepository: Repository<HorarioFuncionamento>,
    ) { }

    // Atualizar ou criar horários de funcionamento
    async atualizarHorarios(petshopId: string, horarios: Record<string, { abertura: string, fechamento: string }>) {
        // Verificar se o petshop já possui horários configurados
        const horarioExistente = await this.horarioRepository.findOne({
            where: { petshop: { id: petshopId } },
        });

        if (horarioExistente) {
            // Atualizar horários se já existirem
            horarioExistente.horarios = horarios;
            return this.horarioRepository.save(horarioExistente);
        } else {
            // Criar novo registro de horários
            const novoHorario = this.horarioRepository.create({
                petshop: { id: petshopId },
                horarios,
            });
            return this.horarioRepository.save(novoHorario);
        }
    }

    // Obter os horários de funcionamento de um petshop
    async obterHorarios(petshopId: string) {
        const horario = await this.horarioRepository.findOne({
            where: { petshop: { id: petshopId } },
        });

        if (!horario) {
            throw new Error('Horários não disponíveis para esse petshop');
        }

        return horario.horarios;
    }
}
