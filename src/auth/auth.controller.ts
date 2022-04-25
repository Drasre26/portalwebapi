import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {  User } from 'src/common/decorators';
import { UsuarioEntity } from 'src/usuario/Entity/usuario.entity';
import { AuthService } from './auth.service';
import { AuthDTO } from './DTO';
import { LocalAuthGuard } from './guards';

@ApiTags('Api Autenticación')//Tag para los Docs
@Controller('api/v1/auth')

export class AuthController {
    
    constructor(private readonly autService:AuthService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() authDTO:AuthDTO,@User() usuario:UsuarioEntity){
        
        const data = await this.autService.login(usuario)

        return data
    }
}
