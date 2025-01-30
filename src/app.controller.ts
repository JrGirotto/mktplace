import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('petshop')
  @Controller("servico")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Endpoint criado por JR GIROTTO!',
    description: 'Retorna uma mensagem fixa para testes'
  })
  @ApiResponse({
    status: 200,
    description: 'Sucesso',
    type: String
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno'
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
