import { Pet } from 'src/pet/entities/pet.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome_cliente: string;

    @Column({ unique: true })
    cpf_cliente: string;

    @Column({ unique: true })
    email_cliente: string;

    @Column()
    telefone_cliente: string;

    @Column()
    endereco_cliente: string;

    //@OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
    //agendamento: Agendamento[];

    @OneToMany(() => Pet, (pet) => pet.cliente)
    pet: Pet[];
}
