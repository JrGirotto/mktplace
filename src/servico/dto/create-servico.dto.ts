import { ApiProperty } from "@nestjs/swagger";
import { UUID } from "crypto";
import { Column } from "typeorm";

export class ServicoFixoDto {
    @ApiProperty()
    id: UUID;
    nome_servico: string;
    preço_servico: number;
    duracao_servico: string;
    disponivel: boolean;
}

export class ServicoExtraDto {
    @ApiProperty()
    id: UUID;
    nome_servico?: string;
    preço_servico?: number;
    duracao_servico?: string;
    disponivel: boolean;
} 

export class CreateServicoDto {
    @Column()
    nome_servico: string;

    @Column()
    servico_fixo: string;

    @Column({ nullable: true })
    servico_extra?: string;

    @Column()
    preco: number;

    @Column()
    disponivel: Boolean;
}
