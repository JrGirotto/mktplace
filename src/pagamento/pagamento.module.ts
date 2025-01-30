import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PagamentoController],
  providers: [PagamentoService],
  exports: [TypeOrmModule]
})
export class PagamentoModule {}
