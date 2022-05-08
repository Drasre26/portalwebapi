import { IsString } from "class-validator";

export class enviarEmailDTO {

    @IsString()
    from: string // sender address
    @IsString()
    to: string// list of receivers
    @IsString()
    subject: string // Subject line
    @IsString()
    text: string // plain text body
    @IsString()
    html: string // html body
}