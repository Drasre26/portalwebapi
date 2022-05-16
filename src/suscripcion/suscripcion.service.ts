import { EventoEntity } from './../evento/Entity/evento.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSuscripcionDto } from './dto/create-suscripcion.dto';
import { EditSuscripcionDto } from './dto/edit-suscripcion.dto';
import { SuscripcionEntity } from './Entity/suscripcion.entity';

@Injectable()
export class SuscripcionService {
    constructor(@InjectRepository(SuscripcionEntity) private readonly suscriptorRepository: Repository<SuscripcionEntity>){}

    async getItems(){
        const data = await this.suscriptorRepository.find()
        if(!data[0])throw new NotFoundException('No se encontraron registros')
        return data;
    }

    async getOneItem(id:number){
        const data = await this.suscriptorRepository.findOne(id)
                    
        if(!data) throw new Error();
        return data;
    }

    async buscarBoleta(numeroboleta:string){
        const data = await this.suscriptorRepository.findOne({
            where:{numeroboleta : numeroboleta}
        })             
        if(!data) throw new Error();
        return data;
    }

    async validarGafete(idsuscripcion: number){

        const data = await this.suscriptorRepository.query(`CALL sp_ValidarGafete(${idsuscripcion})`)
        if(data.length<1) throw new Error();
        return data[0];
        
    }

    async getItemByUser(idusuario:number){
        const data = await this.suscriptorRepository.query(`CALL sp_EventosUsuario(${idusuario})`)
        if(data.length<1) throw new Error();
        return data[0];
    }

    async postItem(dto:CreateSuscripcionDto){
        try {
            const data = this.suscriptorRepository.create(dto)
            return await this.suscriptorRepository.save(data)
        } catch (error) {
            return error
        }
    }
    async putItem(id:number,dto:EditSuscripcionDto){
        try {
            const data = await this.getOneItem(id);
            const editeditem= Object.assign(data,dto)
            return await this.suscriptorRepository.save(editeditem)
        } catch (error) {
            return error
        }
    }

    async deleteItem(id:number){
        try {
            console.log(id)
            return await this.suscriptorRepository.delete(id)
        } catch (error) {
            return error
        }
    }

}
