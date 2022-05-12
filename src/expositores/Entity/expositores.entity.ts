
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('expositor')
export class ExpositorEntity{
    @PrimaryGeneratedColumn()
    idexpositor:number;

    @Column('varchar',{length:300})
    nombre:string;

    @Column('text')
    minibiografia:string;

    @Column('text')
    fotografia:string;

    @Column('text')
    biografia:string;

    @Column({type:'varchar',default:"Activo"})
    estado:string;

}