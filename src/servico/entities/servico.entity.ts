import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Timestamp } from 'typeorm';

@Entity('servico')
export class Servico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'servico_fixo', nullable: false })
    servico_fixo: string;

    @Column({ name: 'servico_extra', nullable: false })
    servico_extra: string;

// @Column({ name: 'data_hora_disponivel', nullable: false })
// data_hora_disponivel: Timestamp;

//@ManyToOne(() => Petshop, petshop => petshop.servicos)
//petshop: Petshop;


}