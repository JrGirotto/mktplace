import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) { }

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get(':clienteId')
  async findAllByCliente(@Param('clienteId') clienteId: string) {
    return this.petService.findAllByCliente(clienteId);
  }


}
