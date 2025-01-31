import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { TipoServico } from './servico.enum';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post(':petshopId')
  async create(
    @Param('petshopId') petshopId: string,
    @Body() createServicoDto:
      { nome: TipoServico; preco: number; duracao: number; disponivel: boolean }[],
  ) {
    return await this.servicoService.createServico(petshopId, createServicoDto);
  }

  @Get()
  findAll() {
    return this.servicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //return this.servicoService.findOneServico(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicoDto: UpdateServicoDto) {
    //return this.servicoService.updateServico(id, updateServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return this.servicoService.removeServico(id);
  }
}
