import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [ProfileModule, PrismaModule, GameModule, UserModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
