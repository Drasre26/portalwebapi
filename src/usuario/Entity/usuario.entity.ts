import { hashSync } from "bcrypt";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column('varchar',{length:100,unique:true})
    email:string;

    @Column('varchar',{length:30,unique:true})
    usuario:string;
    
    @Column({type:'text',select:false})//select : false = no devuelve esta columna al hacer un select
    password:string;
    
    @Column({type:'varchar',default:"Participante"})
    rol:string;

    @Column({type:'varchar',default:"Activo"})
    estado:string;

    @CreateDateColumn({type:'timestamp'})
    createdat:Date;

    @CreateDateColumn({type:'timestamp'})
    updatedat:Date;


    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.password){return;}
        this.password = await hashSync(this.password,10)
        //Actualizamos la fecha despues de editar
        this.updatedat = new Date;
    }
}