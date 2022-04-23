import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuarioController {

    @Get()
    getMany(){
        return 'ok'
    }
}
