import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RelacionesService } from './relaciones.service';
import { CreateRelacionesDto } from './dto/create-relacione.dto';
import { UpdateRelacionesDto } from './dto/update-relacione.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('relaciones')
export class RelacionesController {
  constructor(private readonly relacionesService: RelacionesService) {}

  @Post()
  create(@Body() createRelacionesDto: CreateRelacionesDto) {
    return this.relacionesService.create(createRelacionesDto);
  }

  @Get()
  findAll() {
    return this.relacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRelacionesDto: UpdateRelacionesDto,
  ) {
    return this.relacionesService.update(+id, updateRelacionesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relacionesService.remove(+id);
  }

  @MessagePattern({ cmd: 'get_sexos' })
  async getSexos() {
    return {
      data: await this.relacionesService.getSexos(),
    };
  }

  @MessagePattern({ cmd: 'get_etnias' })
  async getEtnias() {
    return {
      data: await this.relacionesService.getEtnias(),
    };
  }
}
