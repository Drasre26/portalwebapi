import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService:AuthService){
        super({
            usernameField:'usuario',
            password:'password'
        })
    }

   async validate(usuario:string,password:string){
      
        const data = await this.authService.validateuser(usuario,password);
        
        if(!data) throw new UnauthorizedException('El usuario y/o contraseña son incorrectos');
        return data;
   }
}