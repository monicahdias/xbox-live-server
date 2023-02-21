import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'Monica',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL da imagem do perfil',
    example: 'https://i.imgur.com/w3duR07.jpg',
  })
  imageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'ID do jogo',
    example: '9f4afb02-8108-404e-858b-f1a25ac2aa91',
  })
  gameId?: string;

  @IsUUID()
  @IsString()
  @ApiProperty({
    description: 'ID do jogo favorito',
    example: '9f4afb02-8108-404e-858b-f1a25ac2aa91',
  })
  favoriteGameId?: string;
}
