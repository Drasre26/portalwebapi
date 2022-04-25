import { IsString } from "class-validator";

export class AuthDTO {
    @IsString()
    usuario:string;
    @IsString()
    password:string;
}