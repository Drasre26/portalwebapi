import { IsNumber, IsString } from "class-validator";
import { CreateEventoDto } from "src/evento/dto/create-evento.dto";
import { CreateUsuarioDto } from "src/usuario/dto";

export class CreateSuscripcionDto{
    @IsString()
    estado:string;

    @IsNumber()
    idusuario:number
    
    @IsNumber()
    idevento:number
}