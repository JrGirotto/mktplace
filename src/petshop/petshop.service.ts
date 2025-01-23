import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Petshop } from './entities/petshop.entity';
import { CreatePetshopDto } from './dto/create-petshop.dto';
import { UpdatePetshopDto } from './dto/update-petshop.dto';

@Injectable()
export class PetshopService {
  constructor(
    @InjectRepository(Petshop)
    private readonly petshopRepository: Repository<Petshop>,
  ) { }

  async createPetshop(createPetshopDto: CreatePetshopDto): Promise<Petshop> {
    return await this.petshopRepository.save(createPetshopDto);
  }

  async findAllPetshop(): Promise<Petshop[]> {
    const petshop = await this.petshopRepository.find();
    if (petshop.length === 0) {
      throw new HttpException('Nenhum Petshop encontrado', HttpStatus.NOT_FOUND);
    }
    return petshop;
  }

  async viewPetshop(id: string): Promise<Petshop> {
    const petshop = await this.petshopRepository.findOneBy({ id: id });
    if (!petshop) {
      throw new Error('Petshop não encontrado');
    }
    return petshop;
  }

  async updatePetshop(id: string, updatePetshopDto: UpdatePetshopDto): Promise<Petshop> {
    const petshop: Petshop = new Petshop();
    petshop.nome_petshop = updatePetshopDto.nome_petshop ?? '';
    petshop.cnpj_petshop = updatePetshopDto.cnpj_petshop ?? '';
    petshop.email_petshop = updatePetshopDto.email_petshop ?? '';
    petshop.endereco_petshop = updatePetshopDto.endereco_petshop ?? '';
    petshop.telefone_petshop = updatePetshopDto.telefone_petshop ?? '';
    petshop.conta_bancaria_petshop = updatePetshopDto.conta_bancaria_petshop ?? '';
    petshop.id = id;
    return await this.petshopRepository.save(petshop);
  }

  removePetshop(id: string): Promise<DeleteResult> {
    return this.petshopRepository.delete(id);
  }
}