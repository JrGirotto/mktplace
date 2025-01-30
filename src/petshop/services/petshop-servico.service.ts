import { Injectable } from "@nestjs/common";
import { PetshopServico } from "../entities/petshop-servico.entity";
import { Repository } from "typeorm";
import { CreatePetshopServicoDto } from "../dto/create-petshop-servico.dto";


@Injectable()
export class PetshopServicoService {
    constructor(private readonly petshopServicoRepository: Repository<PetshopServico>) { }

    async addServico(createPetshopServicoDto: CreatePetshopServicoDto) {
        const petshopServico = this.petshopServicoRepository.create(createPetshopServicoDto);
        return await this.petshopServicoRepository.save(petshopServico);
    }
}