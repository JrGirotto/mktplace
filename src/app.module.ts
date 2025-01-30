import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PetModule } from './pet/pet.module';
import { PetshopModule } from './petshop/petshop.module';

@Module({
  imports: [
    PetModule,
    PetshopModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      password: 'mvp',
      username: 'postgres',
      database: process.env.DATABASE_NAME,
      synchronize: true,
      //dropSchema: false,
      logging: true,
      //cache: false,
      //entities: [__dirname + '/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
    }),



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }