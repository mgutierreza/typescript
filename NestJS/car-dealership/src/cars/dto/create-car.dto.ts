import { IsString } from "class-validator";

export class CreateCarDto{
    @IsString({message:`La marca debe ser string`})
    readonly marca: string;
    @IsString({message:`El modelo debe ser string`})
    readonly modelo: string;

}