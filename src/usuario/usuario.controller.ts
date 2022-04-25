import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { CreateUsuarioDto, EditUsuarioDto } from './dto';
import { UsuarioService } from './usuario.service';

@ApiTags('Api Usuarios')//Tag para los Docs
@Auth()
@Controller('api/v1/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService:UsuarioService){}
    @Get()
    async getItems(){
        return await this.usuarioService.getItems()
    }
    @Get(':id')
    async getOneItem(@Param('id',ParseIntPipe) id:number){
        return await this.usuarioService.getOneItem(id)
    }
    @Post()
    async postItem(@Body() dto:CreateUsuarioDto){
        const data = await this.usuarioService.postItem(dto)
        delete data.password;
        return data;
    }
    @Put(':id')
    async putItem(@Param('id',ParseIntPipe) id:number,@Body() dto:EditUsuarioDto):Promise<EditUsuarioDto>{
        try {
            return await this.usuarioService.putItem(id,dto)
        } catch (error) {
            return error
        }
    }
    //METODOS DE PERMISOS
    @Get('permisos/:username')
    async getPermisosUsuario(@Param('username') username:string){
        const data = await this.usuarioService.getByUsername(username)
        return data.usuariopermiso
    }

}
