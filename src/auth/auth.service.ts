import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsuarioEntity } from 'src/usuario/Entity/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private readonly usuarioService:UsuarioService,private readonly jwtService:JwtService){}

    async validateuser(usuario:string,password:string){
        const data = await this.usuarioService.getByUsername(usuario)
        //Validamos que exista el usuario
        if(!data){return false}
        //validamos que la contraseña sea correcta
        if(usuario && await compare(password,data.password)){
            const {password, ...rest }= data
            return rest
        }
        return false
    }

    async login(usuario:UsuarioEntity){

        const {idusuario, ...rest} = usuario
        const payload = {sub:idusuario} 
        return {
            usuario,
            accessToken: this.jwtService.sign(payload,{
                expiresIn: '6h' // expires in 6 hours formats  6h,6d,6s,
             })
        }
    }
}
