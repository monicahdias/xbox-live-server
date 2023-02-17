import {
  IsBoolean,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Mônca Dias',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'monicadias@gmail.com',
  })
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsNumber()
  @ApiProperty({
    description: 'Número do CPF do usuário',
    example: 1234567890,
  })
  cpf: number;

  @IsBoolean()
  @ApiProperty({
    description: 'O usuário é/não é administrador',
    example: 'Yes/No',
  })
  isAdmin: boolean;
}
