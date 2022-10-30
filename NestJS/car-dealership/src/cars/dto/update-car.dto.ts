import { IsString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto{
    
    @IsString({message:`La marca debe ser string`})
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message:`La marca debe ser string`})
    @IsOptional()
    readonly marca?: string;
    
    @IsString({message:`El modelo debe ser string`})
    @IsOptional()
    readonly modelo?: string;

}