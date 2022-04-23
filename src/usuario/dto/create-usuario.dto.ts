import { IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    nombre: string
    @IsString()
    usuario: string
    @IsString()
    password: string
}