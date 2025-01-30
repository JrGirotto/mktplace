import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) { }

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const cliente = await this.clienteRepository.findOne({
      where: { id: createPetDto.clienteId },
    });

    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }

    const pet = this.petRepository.create({ ...createPetDto, cliente });
    return this.petRepository.save(pet);
  }

  async findAllByCliente(clienteId: string): Promise<Pet[]> {
    return this.petRepository.find({
      where: { cliente: { id: clienteId } },
    });
  }
}
