import { Module } from '@nestjs/common';
import { ExpositoresService } from './expositores.service';
import { ExpositoresController } from './expositores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpositorEntity } from './Entity/expositores.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExpositorEntity])],
  providers: [ExpositoresService],
  controllers: [ExpositoresController]
})
export class ExpositoresModule {}
