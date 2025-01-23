import { Agendamento } from 'src/agendamento/entities/agendamento.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Servico } from 'src/servico/entities/servico.entity';
import e from 'express';

@Entity('petshop')
export class Petshop {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'nome', nullable: false })
    nome_petshop: string;

    @Column({ name: 'cnpj', nullable: false, unique: true })
    cnpj_petshop: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email_petshop: string;

    @Column({ name: 'telefone', nullable: false })
    telefone_petshop: string;

    @Column({ name: 'endereco', nullable: false })
    endereco_petshop: string;

    @Column({ name: 'conta_bancaria', nullable: false })
    conta_bancaria_petshop: string;

    @OneToMany(() => Agendamento, (agendamento) => agendamento.petshop)
    agendamento: Agendamento[];


    //@OneToMany(() => Servico, (servico) => servico.servico_fixo, { eager: true })
    //servicos: Servico[];

}
