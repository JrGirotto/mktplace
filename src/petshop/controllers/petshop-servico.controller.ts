import { Body, Controller, Post } from "@nestjs/common";
import { CreatePetshopServicoDto } from "../dto/create-petshop-servico.dto";
import { PetshopServicoService } from "../services/petshop-servico.service";

@Controller('petshop/servicos')
export class PetshopServicoController {
    constructor(private readonly petshopServicoService: PetshopServicoService) { }

    @Post()
    async addServico(@Body() createPetshopServicoDto: CreatePetshopServicoDto) {
        return await this.petshopServicoService.addServico(createPetshopServicoDto);
    }
}