import { PartialType } from '@nestjs/mapped-types';
import { CreatePetshopDto } from './create-petshop.dto';

export class UpdatePetshopDto extends PartialType(CreatePetshopDto) {}
