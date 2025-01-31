import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('agendamento')
export class Agendamento {

    @PrimaryGeneratedColumn('uuid')
    id_agendamento: string;

    @Column({ type: 'timestamp', name: 'data_hora_agendamento' })
    data_hora_agendamento: Date;


    @Column({ name: 'status' })
    status: number;

    // 1 Cliente pode ter vários Agendamentos
    //@ManyToOne(() => Cliente, (cliente) => cliente.agendamento, { eager: true, onDelete: 'CASCADE' })
    //cliente: Cliente;

    // 1 Petshop pode ter vários Agendamentos
    //@ManyToOne(() => Petshop, (petshop) => petshop.agendamento, { eager: true, onDelete: 'CASCADE' })
    //petshop: Petshop;


}
