import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';
import { Etnia } from './entities/etnia.entity';
import { RelacionesService } from './relaciones.service';
import { RelacionesController } from './relaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sexo, Etnia])],
  controllers: [RelacionesController],
  providers: [RelacionesService],
  exports: [TypeOrmModule],
})
export class RelacionesModule {}
