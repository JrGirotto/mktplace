export class CreateAgendamentoDto {

    readonly id?: string;

    readonly data_hora_agendamento: Date;

    readonly id_petshop: string;

    readonly id_cliente: string;

    readonly status: boolean;
}
