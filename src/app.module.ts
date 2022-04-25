import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'
@Module({
  imports: [
    //Data Base Conection
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: parseInt(config.get<string>('DATABASE_PORT'),10),
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      })
      
    }),
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    UsuarioModule,
    AuthModule
  ]
})
export class AppModule {}
