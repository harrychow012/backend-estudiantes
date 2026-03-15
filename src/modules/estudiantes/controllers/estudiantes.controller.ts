import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EstudiantesServices } from '../services/estudiantes.service';

@Controller('EStudiantes')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudiantesServices) {}

  @Get()
  getAll() {
    return this.estudianteService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.getOne(id);
  }
}
