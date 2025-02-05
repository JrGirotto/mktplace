import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgendamentoStatus } from "../agendamento-status-enum";
import { Petshop } from "src/petshop/entities/petshop.entity";


@Entity('agendamento')
export class Agendamento {

    @PrimaryGeneratedColumn('uuid')
    id_agendamento: string;

    @Column({ type: 'timestamp', name: 'data_hora_agendamento' })
    data_hora_agendamento: Date;

    @Column({ type: 'enum', enum: AgendamentoStatus, default: AgendamentoStatus.AGENDADO })
    status: AgendamentoStatus;

    // 1 Cliente pode ter vários Agendamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.agendamento, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cliente_id' })
    cliente: Cliente;

    // 1 Petshop pode ter vários Agendamentos
    @ManyToOne(() => Petshop, (petshop) => petshop.agendamento, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'petshop_id' })
    petshop: Petshop;


}
