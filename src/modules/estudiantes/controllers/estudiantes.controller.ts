import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EstudiantesServices } from '../services/estudiantes.service';
import { CreateEstudianteDto } from '../dto/estudiantes.dto';

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

  @Post()
  async create(@Body() estudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro Agregado conn Exito',
    };
    return datos;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() estudianteDto: CreateEstudianteDto,
  ) {
    const estudiante = await this.estudianteService.update(id, estudianteDto);

    return {
      data: estudiante,
      message: 'Registro actualizado con éxito',
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const estudiante = await this.estudianteService.remove(id);

    return {
      data: estudiante,
      message: 'Registro eliminado con exito',
    };
  }
}
