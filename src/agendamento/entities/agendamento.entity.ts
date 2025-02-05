import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AgendamentoStatus } from "../agendamento-status-enum";


@Entity('agendamento')
export class Agendamento {

    @PrimaryGeneratedColumn('uuid')
    id_agendamento: string;

    @Column()
    cliente_id: string;

    @Column()
    petshop_id: string;

    @Column({ type: 'timestamp', name: 'data_hora_agendamento' })
    data_hora_agendamento: Date;

    @Column({ type: 'enum', enum: AgendamentoStatus })
    status: AgendamentoStatus.AGENDADO;

    // 1 Cliente pode ter vários Agendamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.agendamento, { eager: true, onDelete: 'CASCADE' })
    cliente: Cliente;

    // 1 Petshop pode ter vários Agendamentos
    //@ManyToOne(() => Petshop, (petshop) => petshop.agendamento, { eager: true, onDelete: 'CASCADE' })
    //petshop: Petshop;


}
