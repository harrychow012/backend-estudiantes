import { Estudiante } from 'src/modules/estudiantes/entities/estudiantes.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'estudiantes', name: 'sexo' })
export class Sexo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.sexo)
  estudiantes: Estudiante[];
}
