import { IsNumber} from "class-validator";

export class CreateExpositorEventoDto{

    @IsNumber()
    idexpositor:number
    
    @IsNumber()
    idevento:number
}