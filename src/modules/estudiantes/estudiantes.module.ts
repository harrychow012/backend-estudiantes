import { Module } from '@nestjs/common';
import { EstudiantesController } from './controllers/estudiantes.controller';
import { EstudiantesServices } from './services/estudiantes.service';

@Module({
  imports: [],
  controllers: [EstudiantesController],
  providers: [EstudiantesServices],
  exports: [],
})
export class EstudiantesModule {}
