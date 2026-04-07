import { Injectable, NotFoundException } from '@nestjs/common';
import { Estudiante } from '../entities/estudiantes.entity';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/estudiantes.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudiantesServices {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,
  ) {}

  getAll() {
    return `Endpoint para el geAll`;
  }

  getOne(id: number) {
    return `Esto retorna el id ${id}`;
  }

  async create(estudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepo.create(estudianteDto);

      return await this.estudianteRepo.save(estudiante);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, estudianteDto: any) {
    await this.estudianteRepo.update(id, estudianteDto);

    return await this.estudianteRepo.findOne({
      where: { id },
      relations: ['sexo', 'etnia'],
    });
  }

  async remove(id: number) {
    const estudiante = await this.estudianteRepo.findOne({
      where: { id },
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    await this.estudianteRepo.remove(estudiante);

    return estudiante;
  }
}
