//import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateMarcaDto } from './create-marca.dto';

//export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {}
export class UpdateMarcaDto{

    @IsString()
    nombre: string;

}