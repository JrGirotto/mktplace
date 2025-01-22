import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Nome tem que ter mais de 2 caracteres.' })
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @MinLength(3, { message: 'Sobrenome tem que ter mais de 2 caractere.' })
    @IsAlphanumeric()
    username: string;

    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Digite um Email válido.' })
    email: string;

    @IsInt()
    age: number;

    @IsString()
    @IsEnum(['f', 'm', 'u'])
    gender: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: `Senha tem que ter no mínimo 8 e no maximo 20 caracteres, 
      uma letra maiúscula, 
      uma letra minuscula, 
      um número e
      um caractere especial.`,
    })
    password: string;
}