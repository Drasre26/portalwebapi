import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'
import { EventoModule } from './evento/evento.module';
import { ExpositoresModule } from './expositores/expositores.module';
import { SuscripcionModule } from './suscripcion/suscripcion.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { ExpositoreventoModule } from './expositorevento/expositorevento.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    AuthModule,
    EventoModule,
    ExpositoresModule,
    SuscripcionModule,
    ImagenesModule,
    ExpositoreventoModule
  ],
  providers:[AppService],
  controllers: [AppController]
})
export class AppModule {}
