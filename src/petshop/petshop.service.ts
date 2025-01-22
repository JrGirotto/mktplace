import { Injectable } from '@nestjs/common';
import { CreatePetshopDto } from './dto/create-petshop.dto';
import { UpdatePetshopDto } from './dto/update-petshop.dto';

@Injectable()
export class PetshopService {
  create(createPetshopDto: CreatePetshopDto) {
    return 'This action adds a new petshop';
  }

  findAll() {
    return `This action returns all petshop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petshop`;
  }

  update(id: number, updatePetshopDto: UpdatePetshopDto) {
    return `This action updates a #${id} petshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} petshop`;
  }
}
