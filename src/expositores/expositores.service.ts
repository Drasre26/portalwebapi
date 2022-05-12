import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateExpositorDto } from './dto/create-expositor.dto';
import { EditExpositorDto } from './dto/edit-expositor.dto';
import { ExpositorEntity } from './Entity/expositores.entity';

@Injectable()
export class ExpositoresService {

    constructor(@InjectRepository(ExpositorEntity) private readonly expositorRepository: Repository<ExpositorEntity>){}
    
    async getItems(){
        const data = await this.expositorRepository.find({
            where:{ estado: Not("Eliminado") }
        })
        if(!data[0])throw new NotFoundException('No se encontraron registros')
        return data;
    }

    async getOneItem(id:number){
        const data = await this.expositorRepository.findOne({
            where:{ estado: Not("Eliminado"),idexpositor:id }
        })
        if(!data) throw new Error();
        return data;
    }

    async postItem(dto:CreateExpositorDto){
        try {
            const data = this.expositorRepository.create(dto)
            return await this.expositorRepository.save(data)
        } catch (error) {
            return error
        }
    }
    async putItem(id:number,dto:EditExpositorDto){
        try {
            const data = await this.getOneItem(id);
            const editeditem= Object.assign(data,dto)
            return await this.expositorRepository.save(editeditem)
        } catch (error) {
            return error
        }
    }

}
