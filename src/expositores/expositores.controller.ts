import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { CreateExpositorDto } from './dto/create-expositor.dto';
import { EditExpositorDto } from './dto/edit-expositor.dto';
import { ExpositoresService } from './expositores.service';

@ApiTags('Api Expositores')//Tag para los Docs
//@Auth()
@Controller('api/v1/expositores')
export class ExpositoresController {

    constructor(private readonly expositorService:ExpositoresService){}
    @Get()
    async getItems(){
        return await this.expositorService.getItems()
    }
    @Get(':id')
    async getOneItem(@Param('id',ParseIntPipe) id:number){
        return await this.expositorService.getOneItem(id)
    }
    
    @Post()
    async postItem(@Body() dto:CreateExpositorDto){
        const data = await this.expositorService.postItem(dto)
        delete data.password;
        return data;
    }
    @Put(':id')
    async putItem(@Param('id',ParseIntPipe) id:number,@Body() dto:EditExpositorDto):Promise<EditExpositorDto>{
        try {
            return await this.expositorService.putItem(id,dto)
        } catch (error) {
            return error
        }
    }

}
