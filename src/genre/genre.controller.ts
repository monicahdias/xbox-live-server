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
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import { GenreService } from './genre.service';

@ApiTags('genre')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um gênero novo',
  })
  create(
    @LoggedUser() user: User,
    @Body() dto: CreateGenreDto,
  ): Promise<Genre> {
    return this.genreService.create(dto, user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontrar um gênero pelo ID',
  })
  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um gênero pelo ID',
  })
  update(
    @LoggedUser() user: User,
    @Param('id') id: string,
    @Body() dto: UpdateGenreDto,
  ): Promise<Genre> {
    return this.genreService.update(id, dto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a genre by ID',
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.genreService.delete(id, user);
  }
}
