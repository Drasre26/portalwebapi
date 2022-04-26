
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('evento')
export class EventoEntity{
    @PrimaryGeneratedColumn()
    idevento:number;

    @Column('varchar',{length:300})
    titulo:string;
    
    @Column('varchar',{length:600})
    subtitulo:string;

    @Column('text')
    descripción:string;

    @Column('text')
    portada:string;

    @Column('int',{default:50})
    limiteparticipantes:number

    // @CreateDateColumn({type:'date'})
    // fecha:Date  

    @Column({type:'varchar',default:"Activo"})
    estado:string;

}