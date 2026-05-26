import { Injectable } from '@nestjs/common';
import { CreateRelacionesDto } from './dto/create-relacione.dto';
import { UpdateRelacionesDto } from './dto/update-relacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etnia } from './entities/etnia.entity';
import { Sexo } from './entities/sexo.entity';

@Injectable()
export class RelacionesService {
  constructor(
    @InjectRepository(Sexo)
    private readonly sexoRepo: Repository<Sexo>,
    @InjectRepository(Etnia)
    private readonly etniaRepo: Repository<Etnia>,
  ) {}

  create(createRelacionesDto: CreateRelacionesDto) {
    return 'This action adds a new relacione';
  }

  findAll() {
    return `This action returns all relaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relacione`;
  }

  update(id: number, updateRelacionesDto: UpdateRelacionesDto) {
    return `This action updates a #${id} relacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} relacione`;
  }

  async getSexos() {
    return await this.sexoRepo.find();
  }

  async getEtnias() {
    return await this.etniaRepo.find();
  }
}
