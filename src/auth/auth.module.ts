import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy,JwtStrategy } from './strategies';

@Module({
  imports:[PassportModule.register({
    defaultStrategy: 'jwt',
  }),
  JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      secret: config.get<string>('JWT_TOKEN'),
      signOptions: { expiresIn: '60m' },
    }),
  }),
  UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
