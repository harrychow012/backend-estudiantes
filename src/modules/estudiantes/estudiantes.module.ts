import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiantes.entity';
import { EstudiantesServices } from './services/estudiantes.service';
import { EstudiantesController } from './controllers/estudiantes.controller';
import { RelacionesModule } from '../relaciones/relaciones.module';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante]), RelacionesModule],
  providers: [EstudiantesServices],
  controllers: [EstudiantesController],
  exports: [EstudiantesServices, TypeOrmModule],
})
export class EstudiantesModule {}
