import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { PetshopModule } from './petshop/petshop.module';
import { ServicoModule } from './servico/servico.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { ClienteModule } from './cliente/cliente.module';
import { HorarioFuncionamentoService } from './horario-funcionamento/horario-funcionamento.service';
import { HorarioFuncionamentoController } from './horario-funcionamento/horario-funcionamento.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        password: 'mvp',
        username: 'postgres',
        database: 'marketplace',
        synchronize: true,
        //dropSchema: false,
        logging: true,
        //cache: false,
        autoLoadEntities: true,
        entities: [__dirname + '/**/*.entity.{ts,js}'],

      }),
    AgendamentoModule,
    ClienteModule,
    PagamentoModule,
    PetModule,
    PetshopModule,
    ServicoModule,
  ],
  controllers: [AppController, HorarioFuncionamentoController],
  providers: [AppService, HorarioFuncionamentoService],


})

export class AppModule { }
