import { hashSync } from "bcrypt";
import { SuscripcionEntity } from "src/suscripcion/Entity/suscripcion.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolUsuario } from "../enums/usuario-rol.enums";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    idusuario:number;
    @Column('varchar',{length:500})
    nombre:string;
    @Column('varchar',{length:500})
    apellido:string;

    @Column('varchar',{length:25})
    telefono:string;

    @Column('varchar',{length:100})
    email:string;

    @Column('varchar',{length:30,unique:true})
    usuario:string;
    
    @Column({type:'text',select:false})//select : false = no devuelve esta columna al hacer un select
    password:string;
    
    @Column({type:'varchar',default:"Participante"})
    rol:RolUsuario;

    @Column({type:'varchar',default:"Inscrito"})
    estado:string;

    @CreateDateColumn({type:'timestamp'})
    createdat:Date;

    @CreateDateColumn({type:'timestamp'})
    updatedat:Date;

    @OneToMany(type=>SuscripcionEntity,suscriptor=>suscriptor.idusuario)
    @JoinColumn({ name: "idusuario" })
    suscriptor:SuscripcionEntity

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.password){return;}
        this.password = await hashSync(this.password,10)
        //Actualizamos la fecha despues de editar
        this.updatedat = new Date;
    }
}