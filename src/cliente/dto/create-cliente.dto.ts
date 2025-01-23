import { IsString, MinLength, IsNotEmpty, IsEmail } from "class-validator";

export class CreateClienteDto {

    readonly id?: string;

    @IsString()
    @MinLength(3, { message: 'Nome tem que ter mais de 3 caracteres.' })
    @IsNotEmpty()
    readonly nome_cliente: string;

    @IsString()
    @IsNotEmpty()
    readonly cpf_cliente: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Digite um Email válido.' })
    readonly email_cliente: string;

    @IsString()
    @IsNotEmpty()
    readonly telefone_cliente: string;

    @IsString()
    @MinLength(3, { message: 'Endereço tem que ter mais de 3 caracteres.' })
    @IsNotEmpty()
    readonly endereco_cliente: string;
}
