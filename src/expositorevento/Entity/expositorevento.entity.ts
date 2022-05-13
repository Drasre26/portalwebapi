import { EventoEntity } from "src/evento/Entity/evento.entity";
import { ExpositorEntity } from "src/expositores/Entity/expositores.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('expositorevento')
export class ExpositorEventoEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type=>EventoEntity,evento=>evento.idevento)
    @JoinColumn({ name: "idevento" })
    idevento:number

    @ManyToOne(type=>ExpositorEntity,expositor=>expositor.idexpositor)
    @JoinColumn({ name: "idexpositor" })
    idexpositor:number

    
    
}