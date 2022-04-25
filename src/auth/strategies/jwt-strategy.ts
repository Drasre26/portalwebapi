import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usuarioService: UsuarioService,private readonly config: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get<string>('JWT_TOKEN'),
          });
        
    }

    async validate(payload:any){
        const {sub: idusuario}=payload
        const data =  await this.usuarioService.getOneItem(idusuario)
        return data
    }
}