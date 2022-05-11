
import { SuscripcionEntity } from "src/suscripcion/Entity/suscripcion.entity";
import {Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('evento')
export class EventoEntity{
    @PrimaryGeneratedColumn()
    idevento:number;

    @Column('varchar',{length:300})
    titulo:string;
    
    @Column('varchar',{length:600})
    subtitulo:string;

    @Column('text')
    descripcion:string;

    @Column('text')
    googlemaps:string;

    @Column('text')
    portada:string;

    @Column('int',{default:50})
    limiteparticipantes:number

    @CreateDateColumn({type:'timestamp'})
    fecha:Date  

    @OneToMany(type=>SuscripcionEntity,suscriptor=>suscriptor.idevento)
    @JoinColumn({ name: "idevento" })
    suscriptor:SuscripcionEntity
    
    @Column({type:'varchar',default:"Activo"})
    estado:string;

}