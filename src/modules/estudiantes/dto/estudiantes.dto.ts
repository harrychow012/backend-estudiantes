import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  paterno: string;

  @IsOptional()
  @IsString()
  materno?: string;

  @IsString()
  @IsNotEmpty()
  direccion: string;

  @IsNumber()
  sexo_id: number;

  @IsNumber()
  etnia_id: number;
}
