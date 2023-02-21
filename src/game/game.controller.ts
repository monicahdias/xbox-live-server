import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';

@ApiTags('game')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um novo jogo',
  })
  create(@LoggedUser() user: User, @Body() dto: CreateGameDto): Promise<Game> {
    return this.gameService.create(dto, user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar um jogo pelo ID',
  })
  findbyId(@Param('id') id: string): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID',
  })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateGameDto,
  ): Promise<Game> {
    return this.gameService.update(id, dto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um jogo ID',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.gameService.delete(id, user);
  }
}
