import { CreateEventoDto } from './dto/create-evento.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventoEntity } from './Entity/evento.entity';
import { EditEventoDto } from './dto/edit-evento.dto';

@Injectable()
export class EventoService {
    constructor(@InjectRepository(EventoEntity) private readonly eventoRepository: Repository<EventoEntity>){}

    async getItems(){
        const data = await this.eventoRepository.find()
        if(!data[0])throw new NotFoundException('No se encontraron registros')
        return data;
    }

    async getOneItem(id:number){
        const data = await this.eventoRepository.findOne(id)
        if(!data) throw new Error();
        return data;
    }

    async postItem(dto:CreateEventoDto){
        try {
            const data = this.eventoRepository.create(dto)
            return await this.eventoRepository.save(data)
        } catch (error) {
            return error
        }
    }
    async putItem(id:number,dto:EditEventoDto){
        try {
            const data = await this.getOneItem(id);
            const editeditem= Object.assign(data,dto)
            return await this.eventoRepository.save(editeditem)
        } catch (error) {
            return error
        }
    }

}
