import { Injectable, NotFoundException } from '@nestjs/common';
import { Estudiante } from '../entities/estudiantes.entity';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/estudiantes.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sexo } from 'src/modules/relaciones/entities/sexo.entity';
import { Etnia } from 'src/modules/relaciones/entities/etnia.entity';
import { UpdateEstudianteDto } from '../dto/estudiantesUpdate.dto';

@Injectable()
export class EstudiantesServices {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepo: Repository<Estudiante>,

    @InjectRepository(Sexo)
    private sexoRepo: Repository<Sexo>,

    @InjectRepository(Etnia)
    private etniaRepo: Repository<Etnia>,
  ) {}

  async getAll() {
    return await this.estudianteRepo.find({
      relations: ['sexo', 'etnia'],
    });
  }

  async getOne(id: number) {
    const estudiante = await this.estudianteRepo.findOne({
      where: { id },
      relations: ['sexo', 'etnia'],
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    return estudiante;
  }

  async create(estudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepo.create(estudianteDto);

      return await this.estudianteRepo.save(estudiante);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, dto: UpdateEstudianteDto) {
    const estudiante = await this.estudianteRepo.findOne({ where: { id } });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    await this.estudianteRepo.update(id, {
      nombre: dto.nombre,
      paterno: dto.paterno,
      materno: dto.materno,
      direccion: dto.direccion,
      sexo: dto.sexo_id ? ({ id: dto.sexo_id } as any) : undefined,
      etnia: dto.etnia_id ? ({ id: dto.etnia_id } as any) : undefined,
    });

    return this.estudianteRepo.findOne({
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
