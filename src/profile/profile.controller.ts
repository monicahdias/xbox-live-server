import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('profile')
export class ProfileController {
  @Get()
  findAll() {
    return 'Buscar todos os perfis';
  }
}
