import { IsNumber, IsUUID } from 'class-validator';

export class CreatePetshopServicoDto {
    @IsUUID()
    petshopId: string;

    @IsUUID()
    servicoId: string;

    @IsNumber()
    preco: number;
}


