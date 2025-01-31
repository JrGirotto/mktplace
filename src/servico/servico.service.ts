import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoServico } from './servico.enum';
import { Petshop } from 'src/petshop/entities/petshop.entity';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
    @InjectRepository(Petshop)
    private readonly petshopRepository: Repository<Petshop>,
  ) { }

  async createServico(petshopId: string, createServicoDto:
    { nome: TipoServico; preco: number; duracao: number; disponivel: boolean }[]) {
    if (!Array.isArray(createServicoDto)) {
      throw new HttpException('O corpo da requisição deve ser um array', HttpStatus.BAD_REQUEST);
    }

    const petshop = await this.petshopRepository.findOne({ where: { id: petshopId } });

    if (!petshop) {
      throw new Error('Petshop não encontrado');
    }

    const servicosPetshop = createServicoDto.map((servicoDto) => {
      const servico = new Servico();
      servico.nome = servicoDto.nome; // Nome fixo
      servico.preco = servicoDto.preco;
      servico.duracao = servicoDto.duracao;
      servico.disponivel = servicoDto.disponivel;
      servico.petshop = petshop;
      return servico;
    });

    await this.servicoRepository.save(servicosPetshop);
    return servicosPetshop;
  }


  async findAll() {
    const servico = await this.servicoRepository.find();
    if (servico.length === 0) {
      throw new HttpException('Nenhum Serviço encontrado', HttpStatus.NOT_FOUND);
    }
    return servico;
  }
}

