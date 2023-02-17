import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profile.findMany();
  }
  create(dto: CreateProfileDto) {
    const data: Profile = { ...dto };

    return this.prisma.profile.create({ data });
  }
}
