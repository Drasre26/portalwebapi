import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSuscripcionDto } from './dto/create-suscripcion.dto';
import { EditSuscripcionDto } from './dto/edit-suscripcion.dto';
import { SuscripcionService } from './suscripcion.service';

@ApiTags('Api Suscripcion')//Tag para los Docs

@Controller('api/v1/suscripciones')
export class SuscripcionController {

    constructor(private readonly suscripcionService:SuscripcionService){}
    
    @Get()
    async getItems(){
        return await this.suscripcionService.getItems()
    }

    @Get('usuario/:id')
    async getItemByUser(@Param('id',ParseIntPipe) id:number){
        return await this.suscripcionService.getItemByUser(id)
    }

    @Get('validarboleta/:numeroboleta')
    async buscarBoleta(@Param('numeroboleta') numeroboleta:string){
        return await this.suscripcionService.buscarBoleta(numeroboleta)
    }

    @Get('validargafete/:id')
    async getValidarGafete(@Param('id',ParseIntPipe) id:number){
        return await this.suscripcionService.validarGafete(id)
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

    @Delete(':id')
    async deleteItem(@Param('id',ParseIntPipe) id:number){
        return await this.suscripcionService.deleteItem(id)
    }
}
