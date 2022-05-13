import { CreateExpositorEventoDto } from './dto/create-expositorevento.dto';
import { ExpositoreventoService } from './expositorevento.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Api Expositores Eventos')//Tag para los Docs
@Controller('api/v1/expositoreseventos')
export class ExpositoreventoController {
    constructor(private readonly expositoreventoService:ExpositoreventoService){}
    
    @Get(':id')
    async getOneItem(@Param('id',ParseIntPipe) id:number){
        return await this.expositoreventoService.getExpositoresEvento(id)
    }
    
    @Post()
    async postItem(@Body() dto:CreateExpositorEventoDto){
        const data = await this.expositoreventoService.postItem(dto)
        return data;
    }


    @Delete(':id')
    async deleteItem(@Param('id',ParseIntPipe) id:number){
        return await this.expositoreventoService.deleteItem(id)
    }
}
