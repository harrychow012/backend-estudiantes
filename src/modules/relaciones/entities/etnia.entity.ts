import { Estudiante } from 'src/modules/estudiantes/entities/estudiantes.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'estudiantes', name: 'etnia' })
export class Etnia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.etnia)
  estudiantes: Estudiante[];
}
