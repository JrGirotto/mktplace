import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetshopService } from './petshop.service';
import { CreatePetshopDto } from './dto/create-petshop.dto';
import { UpdatePetshopDto } from './dto/update-petshop.dto';

@Controller('petshop')
export class PetshopController {
  constructor(private readonly petshopService: PetshopService) { }

  @Post()
  async create(@Body() createPetshopDto: CreatePetshopDto) {
    return await this.petshopService.createPetshop(createPetshopDto);
  }

  @Get()
  findAll() {
    return this.petshopService.findAllPetshop();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petshopService.viewPetshop(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetshopDto: UpdatePetshopDto) {
    return this.petshopService.updatePetshop(id, updatePetshopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petshopService.removePetshop(id);
  }
}