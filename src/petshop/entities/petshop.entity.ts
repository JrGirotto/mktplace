import { IsUUID } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
