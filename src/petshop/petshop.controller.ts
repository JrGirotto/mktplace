import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetshopService } from './petshop.service';
import { CreatePetshopDto } from './dto/create-petshop.dto';
import { UpdatePetshopDto } from './dto/update-petshop.dto';

@Controller('petshop')
export class PetshopController {
  constructor(private readonly petshopService: PetshopService) {}

  @Post()
  create(@Body() createPetshopDto: CreatePetshopDto) {
    return this.petshopService.create(createPetshopDto);
  }

  @Get()
  findAll() {
    return this.petshopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petshopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetshopDto: UpdatePetshopDto) {
    return this.petshopService.update(+id, updatePetshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petshopService.remove(+id);
  }
}
