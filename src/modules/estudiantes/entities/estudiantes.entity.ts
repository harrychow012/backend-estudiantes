import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Sexo } from '../../relaciones/entities/sexo.entity';
import { Etnia } from '../../relaciones/entities/etnia.entity';

@Entity({ schema: 'estudiantes', name: 'estudiante' })
export class Estudiante {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', nullable: false, length: 60 })
  nombre: string;

  @Column({ type: 'varchar', nullable: false, length: 30 })
  paterno: string;

  @Column({ type: 'varchar', nullable: true, length: 30 })
  materno: string;

  @Column({ type: 'varchar', nullable: true, length: 200 })
  direccion: string;

  @ManyToOne(() => Sexo, (sexo) => sexo.estudiantes)
  @JoinColumn({ name: 'sexo_id' })
  sexo: Sexo;

  @ManyToOne(() => Etnia, (etnia) => etnia.estudiantes)
  @JoinColumn({ name: 'etnia_id' })
  etnia: Etnia;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
