import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { UserService } from './user.service';
import {
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os perfis' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Visualizar um perfil' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um perfil' })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Editar um perfil' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um perfil' })
  delete(@Param('id') id: string) {
    this.userService.delete(id);
  }
}
