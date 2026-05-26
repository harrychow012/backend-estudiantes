import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiantes.entity';
import { EstudiantesServices } from './services/estudiantes.service';
import { EstudiantesController } from './controllers/estudiantes.controller';
import { RelacionesModule } from '../relaciones/relaciones.module';
import { Sexo } from '../relaciones/entities/sexo.entity';
import { Etnia } from '../relaciones/entities/etnia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Estudiante]),
    RelacionesModule,
    Sexo,
    Etnia,
  ],
  providers: [EstudiantesServices],
  controllers: [EstudiantesController],
  exports: [EstudiantesServices, TypeOrmModule],
})
export class EstudiantesModule {}
