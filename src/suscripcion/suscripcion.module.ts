import { Module } from '@nestjs/common';
import { SuscripcionService } from './suscripcion.service';
import { SuscripcionController } from './suscripcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuscripcionEntity } from './Entity/suscripcion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SuscripcionEntity])],
  providers: [SuscripcionService],
  controllers: [SuscripcionController]
})
export class SuscripcionModule {}
