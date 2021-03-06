import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsuarioDto, EditUsuarioDto } from './dto';
import { enviarEmailDTO } from './dto/enviarEmail-usuario.dto';
import { notificacionDTO } from './dto/notificacion-usuario.dto';
import { UsuarioService } from './usuario.service';
//import nodemailer from 'nodemailer';
const accountSid = 'ACb4307fc3038af983696968f3208253c7';
const authToken = 'e51103773fca48c2884d9fb58aa06422';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require("nodemailer");
@ApiTags('Api Usuarios')//Tag para los Docs
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
    @Post('mensaje')
    async enviarSMS(@Body() mensaje:notificacionDTO){

        try {
            const data = await client.messages.create(mensaje)
            return data
        } catch (error) {
            return error
        }
    
        
    }

    @Post('enviarcorreo')
    async enviarEmail(@Body() email:enviarEmailDTO){

        //Configuramos accesos para enviar correos
        const transporter = nodemailer.createTransport({
            host: 'mail.cunsurori.edu.gt',
            port: 465,
            auth: {
                user: 'draslyrafael@cunsurori.edu.gt',
                pass: 'cherche1990'
            }
        });

        try {
            // send mail with defined transport object
            let info = await transporter.sendMail(email);
            return info
        } catch (error) {
            return error
        }
    
        
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
