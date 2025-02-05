import { IsNotEmpty, IsUUID, IsDate, IsDateString } from 'class-validator';

export class CreateAgendamentoDto {
    @IsUUID()
    @IsNotEmpty()
    cliente_id: string; // Referência ao cliente que está realizando o agendamento

    @IsUUID()
    @IsNotEmpty()
    petshop_id: string; // Referência ao petshop onde o serviço será realizado

    @IsDateString()
    @IsNotEmpty()
    data_hora_agendamento: string; // Data e hora do agendamento
}

