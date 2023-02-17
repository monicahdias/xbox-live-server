import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Sumie Dias',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'msumiedias@gmail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Senha do usuário',
    example: '123',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'CPF do usuário',
    example: 123456789,
  })
  cpf: number;

  @IsString()
  @ApiProperty({
    description: 'O usuário é/não é administrador',
    example: 'yes',
  })
  isAdmin: boolean;
}
