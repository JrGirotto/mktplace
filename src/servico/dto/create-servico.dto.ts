import { PartialType } from "@nestjs/mapped-types";
import { Column } from "typeorm";
import { TipoServico } from "../servico.enum";
import { IsNotEmpty } from "class-validator";

export class CreateServicoDto {

    @IsNotEmpty()
    @Column({ type: 'array', ['enum']: TipoServico })
    readonly servicos: Array<TipoServico>;

    //@Column({ nome: TipoServico; preco: number; duracao: number; disponivel: boolean }[])



}
