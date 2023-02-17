import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile-dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  findOne(id: string): Promise<Profile> {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  create(dto: CreateProfileDto): Promise<Profile> {
    const data: Profile = { ...dto };

    return this.prisma.profile.create({ data });
  }

  update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    const data: Partial<Profile> = { ...dto };
    return this.prisma.profile.update({ where: { id }, data });
  }
}
