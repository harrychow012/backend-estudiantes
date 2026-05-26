import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './estudiantes.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {}
