import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import {
  Get,
  Patch,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist/decorators';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';
import { Param } from '@nestjs/common';
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
  @ApiOperation({ summary: 'Editar um perfil' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileService.update(id, dto);
  }
}
