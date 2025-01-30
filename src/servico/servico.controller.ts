import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  async create(@Body() createServicoDto: CreateServicoDto) {
    //return await this.servicoService.createServico(createServicoDto);
  }

  @Get()
  findAll() {
    //return this.servicoService.findAllServico();
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
