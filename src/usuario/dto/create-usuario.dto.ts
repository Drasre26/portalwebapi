import { RolUsuario } from './../enums/usuario-rol.enums';
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto{
    @IsString()
    nombre:string;

    @IsString()
    apellido:string;

    @IsString()
    telefono:string;

    @IsString()
    email:string;
    
    
    @IsString()
    usuario:string;

    @IsString()
    @MinLength(8)
    @MaxLength(500)
    password:string;

    @IsString()
    rol: RolUsuario

    @IsString()
    @IsOptional()
    estado:string;
}