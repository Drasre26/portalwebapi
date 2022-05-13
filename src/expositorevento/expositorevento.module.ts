import { ExpositorEventoEntity } from './Entity/expositorevento.entity';
import { Module } from '@nestjs/common';
import { ExpositoreventoService } from './expositorevento.service';
import { ExpositoreventoController } from './expositorevento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ExpositorEventoEntity])],
  providers: [ExpositoreventoService],
  controllers: [ExpositoreventoController]
})
export class ExpositoreventoModule {}
