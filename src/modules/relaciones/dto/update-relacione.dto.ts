import { PartialType } from '@nestjs/mapped-types';
import { CreateRelacionesDto } from './create-relacione.dto';

export class UpdateRelacionesDto extends PartialType(CreateRelacionesDto) {}
