import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('suscripcion')
export class SuscripcionEntity{

    @PrimaryGeneratedColumn()
    idsuscripcion:number;


    @Column('varchar',{default:'Inscrito'})
    estado:string;
    
    @CreateDateColumn({type:'timestamp'})
    createdat:Date;

    @CreateDateColumn({type:'timestamp'})
    updatedat:Date;


    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        //Actualizamos la fecha despues de insertar ó editar
        this.updatedat = new Date;
    }
    
}