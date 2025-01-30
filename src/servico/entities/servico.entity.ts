import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TipoServico } from '../servico.enum';
import { PetshopServico } from 'src/petshop/entities/petshop-servico.entity';

@Entity()
export class Servico {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: TipoServico, unique: true })
    nome: TipoServico;

    @OneToMany(() => PetshopServico, (petshopServico) => petshopServico.servico)
    petshops: PetshopServico[];


}