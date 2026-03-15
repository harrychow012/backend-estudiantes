import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudiantesServices {
  constructor() {}

  getAll() {
    return `Endpoint para el geAll`;
  }

  getOne(id: number) {
    return `Esto retorna el id ${id}`;
  }
}
