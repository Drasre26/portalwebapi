import { IsDateString, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateEventoDto{
    @IsString()
    titulo:string;
    
    @IsString()
    subtitulo:string;

    @IsString()
    descripción:string;

    @IsString()
    portada:string;

    @IsNumber()
    limiteparticipantes:number

    @IsDateString()
    fecha:Date  

    @IsString()
    @IsOptional()
    estado:string;
}