//import { PartialType } from '@nestjs/mapped-types';
import { IsString, MinLength } from 'class-validator';
import { CreateMarcaDto } from './create-marca.dto';

//export class UpdateMarcaDto extends PartialType(CreateMarcaDto) {}
export class UpdateMarcaDto{

    @IsString()
    @MinLength(1)
    name: string;

}