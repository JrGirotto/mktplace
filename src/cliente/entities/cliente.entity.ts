import { Agendamento } from 'src/agendamento/entities/agendamento.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome_cliente: string;

    @Column({ unique: true })
    cpf_cliente: string;

    @Column()
    email_cliente: string;

    @Column()
    telefone_cliente: string;

    @Column()
    endereco_cliente: string;

    @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
    agendamento: Agendamento[];
}
