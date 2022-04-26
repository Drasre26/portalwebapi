import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EditEventoDto } from './dto/edit-evento.dto';
import { CreateEventoDto } from './dto/create-evento.dto';
import { Auth } from 'src/common/decorators';
import { EventoService } from './evento.service';

@ApiTags('Api Eventos')//Tag para los Docs
@Auth()
@Controller('api/v1/eventos')
export class EventoController {
    constructor(private readonly eventoService:EventoService){}
    @Get()
    async getItems(){
        return await this.eventoService.getItems()
    }
    @Get(':id')
    async getOneItem(@Param('id',ParseIntPipe) id:number){
        return await this.eventoService.getOneItem(id)
    }
    
    @Post()
    async postItem(@Body() dto:CreateEventoDto){
        const data = await this.eventoService.postItem(dto)
        delete data.password;
        return data;
    }
    @Put(':id')
    async putItem(@Param('id',ParseIntPipe) id:number,@Body() dto:EditEventoDto):Promise<EditEventoDto>{
        try {
            return await this.eventoService.putItem(id,dto)
        } catch (error) {
            return error
        }
    }
}
