import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import {
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';
import { HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile-dto';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os perfis' })
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Visualizar um perfil' })
  findOne(@Param('id') id: string): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um perfil' })
  create(@Body() dto: CreateProfileDto): Promise<Profile> {
    return this.profileService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Editar um perfil pelo ID' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um perfil pelo ID' })
  delete(@Param('id') id: string) {
    this.profileService.delete(id);
  }
}
