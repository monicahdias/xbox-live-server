import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class ProfileService {
  findAll() {
    return 'Buscar todos os perfis';
  }
  create() {
    return 'Criar um perfil';
  }
}
