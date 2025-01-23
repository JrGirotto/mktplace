import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetshopModule } from './petshop/petshop.module';
import { ClienteModule } from './cliente/cliente.module';
import { ServicoModule } from './servico/servico.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      //port: parseInt(<string>process.env.DATABASE_PORT),
      port: Number(process.env.DATABASE_PORT),
      password: 'mvp',
      username: 'postgres',
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    UserModule,
    PetshopModule,
    ClienteModule,
    ServicoModule,
    AgendamentoModule,
    PagamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }