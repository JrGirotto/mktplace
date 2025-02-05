import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Petshop } from "src/petshop/entities/petshop.entity";

@Entity('horario_funcionamento')
export class HorarioFuncionamento {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('jsonb')
    horarios: Record<string, { abertura: string, fechamento: string }>;

    @ManyToOne(() => Petshop, (petshop) => petshop.horarios, { onDelete: 'CASCADE' })
    petshop: Petshop;
}
