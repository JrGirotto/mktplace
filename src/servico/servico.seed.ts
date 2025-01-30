import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Servico } from "./entities/servico.entity";
import { TipoServico } from "./servico.enum";

@Injectable()
export class ServicoSeed {
    constructor(@InjectRepository(Servico) private readonly servicoRepository: Repository<Servico>,) { }

    async seed() {
        const servicos = Object.values(TipoServico).map((tipo) => {
            const servico = new Servico();
            servico.nome = tipo;
            return servico;
        });
        await this.servicoRepository.save(servicos);
    }
}