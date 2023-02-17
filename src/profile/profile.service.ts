import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  findAll() {
    return 'Buscar todos os perfis';
  }
  create(createProfileDto: CreateProfileDto) {
    return 'Criar um perfil' + JSON.stringify(createProfileDto);
  }
}
