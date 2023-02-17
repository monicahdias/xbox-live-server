import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'KillerPenguin',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'URL da imagem do perfil',
    example:
      'https://openseauserdata.com/files/18d1719179758dbf743a7cc9a3540b72.jpg',
  })
  imageUrl: string;
}
