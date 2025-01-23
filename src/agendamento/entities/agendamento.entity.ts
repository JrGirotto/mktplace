import { Cliente } from "src/cliente/entities/cliente.entity";
import { Petshop } from "src/petshop/entities/petshop.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";


enum Status_agendamento {
    'agendado',
    'cancelado',
    'realizado'
}

@Entity('agendamento')
export class Agendamento {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', name: 'data_hora_agendamento' })
    data_hora_agendamento: Date;


    @Column({ name: 'status' })
    status_agendamento?: Status_agendamento;

    // 1 Cliente pode ter vários Agendamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.agendamento, { eager: true })
    cliente: Cliente;

    // 1 Petshop pode ter vários Agendamentos
    @ManyToOne(() => Petshop, (petshop) => petshop.agendamento, { eager: true })
    petshop: Petshop;

}
