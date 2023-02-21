import { IsNumber, IsUrl } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Valorant',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL da imagem do jogo',
    example: 'https://sm.ign.com/ign_br/game/v/valorant/valorant_5mxf.jpg',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example:
      'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: 2020,
  })
  year: number;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'Nota do IMDb do jogo',
    example: 4.98,
  })
  imdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'URL do trailer do jogo no YouTube',
    example: 'https://youtu.be/IoUFmdDxjvk',
  })
  trailerYouTubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL da gameplay do jogo no YouTube',
    example: 'https://www.youtube.com/watch?v=gRqddeZDNyM',
  })
  gameplayYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'FPS',
  })
  genreName: string;
}
