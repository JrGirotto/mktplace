import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column({ unique: true })
    cpf: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;
}
