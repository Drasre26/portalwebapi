import { CreateExpositorEventoDto } from './dto/create-expositorevento.dto';
import { ExpositorEventoEntity } from './Entity/expositorevento.entity';
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExpositoreventoService {
    constructor(@InjectRepository(ExpositorEventoEntity) private readonly expositoreventoRepository: Repository<ExpositorEventoEntity>){}


    async getExpositoresEvento(idevento:number){
        const data = await this.expositoreventoRepository.query(`CALL sp_ExpositoresEvento(${idevento})`)
        if(data.length<1) throw new Error();
        return data[0];
    }

    async postItem(dto:CreateExpositorEventoDto){
        try {
            const data = this.expositoreventoRepository.create(dto)
            return await this.expositoreventoRepository.save(data)
        } catch (error) {
            return error
        }
    }

    async deleteItem(id:number){
        try {
            return await this.expositoreventoRepository.delete(id)
        } catch (error) {
            return error
        }
    }
}
