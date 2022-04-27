import { EventoEntity } from "src/evento/Entity/evento.entity";
import { UsuarioEntity } from "src/usuario/Entity/usuario.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(type=>UsuarioEntity,usuario=>usuario.idusuario)
    @JoinColumn({ name: "idusuario" })
    idusuario:UsuarioEntity

    @ManyToOne(type=>EventoEntity,evento=>evento.idevento)
    @JoinColumn({ name: "idevento" })
    idevento:EventoEntity

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        //Actualizamos la fecha despues de insertar ó editar
        this.updatedat = new Date;
    }
    
}