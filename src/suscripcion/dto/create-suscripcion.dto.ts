import { IsNumber, IsOptional, IsString } from "class-validator";
export class CreateSuscripcionDto{
    @IsString()
    @IsOptional()
    estado:string;

    @IsString()
    @IsOptional()
    numeroboleta:string;

    @IsString()
    @IsOptional()
    boleta:string;

    @IsNumber()
    idusuario:number
    
    @IsNumber()
    idevento:number
}