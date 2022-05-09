import { EventoEntity } from "src/evento/Entity/evento.entity";
import { UsuarioEntity } from "src/usuario/Entity/usuario.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('suscripcion')
export class SuscripcionEntity{

    @PrimaryGeneratedColumn()
    idsuscripcion:number;


    @Column('varchar',{default:'Inscrito'})
    estado:string;

    // @Column('varchar',{default:'Participante'})//aqui puede ser conferencista
    // tipousuario:string;

    @Column('bigint',{default:'0'})
    numeroboleta:string;

    @Column('varchar',{default:'default.png'})
    boleta:string;

    @CreateDateColumn({type:'timestamp'})
    createdat:Date;

    @CreateDateColumn({type:'timestamp'})
    updatedat:Date;

    @ManyToOne(type=>UsuarioEntity,usuario=>usuario.idusuario)
    @JoinColumn({ name: "idusuario"})
    idusuario:number

    @ManyToOne(type=>EventoEntity,evento=>evento.idevento)
    @JoinColumn({ name: "idevento" })
    idevento:number

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        //Actualizamos la fecha despues de insertar ó editar
        this.updatedat = new Date;
    }
    
}