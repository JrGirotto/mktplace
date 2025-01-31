import { IsEmail, IsInt, IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreatePetshopDto {

    @IsString()
    @MinLength(3, { message: 'Nome tem que ter mais de 3 caracteres.' })
    @IsNotEmpty()
    readonly nome_petshop: string;

    @IsString()
    @IsNotEmpty()
    readonly cnpj_petshop: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Digite um Email válido.' })
    readonly email_petshop: string;

    @IsString()
    @IsNotEmpty()
    readonly telefone_petshop: string;

    @IsString()
    @MinLength(3, { message: 'Endereço tem que ter mais de 3 caracteres.' })
    @IsNotEmpty()
    readonly endereco_petshop: string;

    @IsNotEmpty()
    readonly conta_bancaria_petshop: string;

}
