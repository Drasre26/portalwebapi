import { IsString } from "class-validator";

export class notificacionDTO {
    @IsString({message: 'El contenido es obligatorio'})
    body:string;
    @IsString()
    from:string

    @IsString()
    to:string;
}