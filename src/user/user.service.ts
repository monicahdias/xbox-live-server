import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(dto: CreateUserDto): Promise<User> {
    const data: User = { ...dto };

    return this.prisma.user.create({ data });
  }

  update(id: string, dto: UpdateUserDto): Promise<User> {
    const data: Partial<User> = { ...dto };
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }
}