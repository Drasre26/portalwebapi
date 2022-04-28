import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { CreateSuscripcionDto } from './dto/create-suscripcion.dto';
import { EditSuscripcionDto } from './dto/edit-suscripcion.dto';
import { SuscripcionService } from './suscripcion.service';

@ApiTags('Api Suscripcion')//Tag para los Docs
@Auth()

@Controller('api/v1/suscripcion')
export class SuscripcionController {

    constructor(private readonly suscripcionService:SuscripcionService){}
    
    @Get()
    async getItems(){
        return await this.suscripcionService.getItems()
    }
    @Get(':id')
    async getOneItem(@Param('id',ParseIntPipe) id:number){
        return await this.suscripcionService.getOneItem(id)
    }
    
    @Post()
    async postItem(@Body() dto:CreateSuscripcionDto){
        const data = await this.suscripcionService.postItem(dto)
        delete data.password;
        return data;
    }

    @Put(':id')
    async putItem(@Param('id',ParseIntPipe) id:number,@Body() dto:EditSuscripcionDto):Promise<EditSuscripcionDto>{
        try {
            return await this.suscripcionService.putItem(id,dto)
        } catch (error) {
            return error
        }
    }
}
