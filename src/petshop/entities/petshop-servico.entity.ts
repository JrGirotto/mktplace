import { Agendamento } from 'src/agendamento/entities/agendamento.entity';
import { Servico } from 'src/servico/entities/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Petshop } from './petshop.entity';

@Entity()
export class PetshopServico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Petshop, (petshop) => petshop.servicos)
    petshop: Petshop;

    @ManyToOne(() => Servico, (servico) => servico.petshops)
    servico: Servico;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;


}
