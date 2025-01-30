import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PetModule } from './pet/pet.module';
import { PetshopModule } from './petshop/petshop.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { Agendamento } from './agendamento/entities/agendamento.entity';
import { Pet } from './pet/entities/pet.entity';
import { Petshop } from './petshop/entities/petshop.entity';
import { Servico } from './servico/entities/servico.entity';
import { Pagamento } from './pagamento/entities/pagamento.entity';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      password: 'mvp',
      username: 'postgres',
      database: process.env.DATABASE_NAME,
      //entities: [Cliente, Petshop, Pet, Servico, Agendamento, PetshopServico, Pagamento],
      synchronize: true,
      //dropSchema: false,
      logging: true,
      //cache: false,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
    }),
    PetModule,
    PetshopModule,
    ServicoModule,
    Agendamento,



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }