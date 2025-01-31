import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { TipoServico } from '../servico.enum';
import { Petshop } from 'src/petshop/entities/petshop.entity';

@Entity()
export class Servico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: TipoServico })
    nome: TipoServico;

    @Column('decimal', { nullable: true })
    preco: number; // Personalizado por loja

    @Column({ nullable: true })
    duracao: number; // Personalizado por loja

    @Column({ default: true })
    disponivel: boolean; // Personalizado por loja

    @ManyToOne(() => Petshop, (petshop) => petshop.servicos, { onDelete: 'CASCADE' })
    petshop: Petshop; // Relacionamento com a loja




}