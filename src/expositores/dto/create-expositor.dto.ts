import { IsDateString, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateExpositorDto{
    @IsString()
    nombre:string;
    
    @IsString()
    fotografia:string;

    @IsString()
    biografia:string;

    @IsString()
    @IsOptional()
    estado:string;
}