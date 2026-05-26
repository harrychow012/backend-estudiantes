import {
  Controller,
  // Post,
} from '@nestjs/common';
import { EstudiantesServices } from '../services/estudiantes.service';
import { CreateEstudianteDto } from '../dto/estudiantes.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateEstudianteDto } from '../dto/estudiantesUpdate.dto';

@Controller('Estudiantes')
export class EstudiantesController {
  constructor(private readonly estudianteService: EstudiantesServices) {}

  // @Get()
  @MessagePattern({ cmd: 'get_all_students' })
  async getAll() {
    const estudiante = await this.estudianteService.getAll();
    console.log(estudiante);
    const datos = {
      data: estudiante,
      message: 'Lista de estudiantes obtenida con éxito',
    };
    return datos;
  }

  // @Get(':id')
  @MessagePattern({ cmd: 'get_student' })
  async getOne(@Payload() { id }: { id: number }) {
    const estudiante = await this.estudianteService.getOne(id);

    const datos = {
      data: estudiante,
      message: 'Estudiante obtenido con éxito',
    };
    return datos;
  }

  // @Post()
  @MessagePattern({ cmd: 'create_student' })
  async create(@Payload() estudianteDto: CreateEstudianteDto) {
    const estudiante = await this.estudianteService.create(estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro Agregado conn Exito',
    };
    return datos;
  }

  // @Patch(':id')
  @MessagePattern({ cmd: 'update_student' })
  async update(
    @Payload() data: { id: number; estudianteDto: UpdateEstudianteDto },
  ) {
    const { id, estudianteDto } = data;
    const estudiante = await this.estudianteService.update(id, estudianteDto);

    const datos = {
      data: estudiante,
      message: 'Registro actualizado con exito',
    };
    return datos;
  }

  @MessagePattern({ cmd: 'delete_student' })
  async remove(@Payload() { id }: { id: number }) {
    const estudiante = await this.estudianteService.remove(id);

    return {
      data: estudiante,
      message: 'Registro eliminado con exito',
    };
  }
}
