import { IsString, IsOptional, IsNumber, IsUUID } from "class-validator";

export class CreatePetDto {

    @IsString()
    nome: string;

    @IsString()
    especie: string;

    @IsString()
    raca: string;

    @IsOptional()
    @IsNumber()
    idade?: number;

    @IsOptional()
    @IsNumber()
    peso?: number;

    @IsOptional()
    @IsString()
    cor?: string;

    @IsOptional()
    @IsString()
    microchip?: string;

    @IsUUID()
    clienteId: string;
}
