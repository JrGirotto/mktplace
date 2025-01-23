import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) { }


  async createCliente(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return await this.clienteRepository.save(createClienteDto);
  }

  async findAllCliente(): Promise<Cliente[]> {
    const cliente = await this.clienteRepository.find();
    if (cliente.length === 0) {
      throw new HttpException('Nenhum cliente encontrado', HttpStatus.NOT_FOUND);
    }
    return cliente;
  }

  async findOneCliente(id: string): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id: id });
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return cliente;
  }

  update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente: Cliente = new Cliente();
    cliente.nome_cliente = updateClienteDto.nome_cliente ?? '';
    cliente.cpf_cliente = updateClienteDto.cpf_cliente ?? '';
    cliente.email_cliente = updateClienteDto.email_cliente ?? '';
    cliente.endereco_cliente = updateClienteDto.endereco_cliente ?? '';
    cliente.telefone_cliente = updateClienteDto.telefone_cliente ?? '';
    cliente.id = id;
    return this.clienteRepository.save(cliente);
  }

  removeCliente(id: string): Promise<DeleteResult> {
    return this.clienteRepository.delete(id);

  }
}
