import { Agendamento } from 'src/agendamento/entities/agendamento.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Servico } from 'src/servico/entities/servico.entity';
import { HorarioFuncionamento } from 'src/horario-funcionamento/entities/horario_funcionamento.entity';

@Entity()
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

    @OneToMany(() => Servico, (Servico) => Servico.petshop)
    servicos: Servico[];

    @OneToMany(() => Agendamento, (Agendamento) => Agendamento.petshop)
    agendamento: Agendamento[];

    @OneToMany(() => HorarioFuncionamento, (horario) => horario.petshop, { eager: true })
    horarios: HorarioFuncionamento[];


}

