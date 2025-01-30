import { Cliente } from "src/cliente/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Pet {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    especie: string; // Cachorro, gato, etc.

    @Column()
    raca: string;

    @Column({ nullable: true })
    idade: number;

    @Column({ nullable: true })
    peso: number;

    @Column({ nullable: true })
    cor: string;

    @Column({ nullable: true })
    microchip: string; // Número do microchip, se houver

    @ManyToOne(() => Cliente, (cliente) => cliente.pet, { onDelete: 'CASCADE' })
    cliente: Cliente;
}
