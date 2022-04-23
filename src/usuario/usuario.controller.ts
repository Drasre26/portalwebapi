import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto';

@Controller('usuarios')
export class UsuarioController {

    @Get()
    getMany(){
        return 'ok'
    }
    @Post()
    createItem(@Body() dto: CreateUsuarioDto){
        return dto
    }
}
