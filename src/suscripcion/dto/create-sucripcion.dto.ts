import { IsNumber, IsString } from "class-validator";
import { CreateUsuarioDto } from "src/usuario/dto";

export class CreateSuscripcionDto{
    @IsString()
    estado:string;

    @IsNumber()
    idusuario:CreateUsuarioDto
}