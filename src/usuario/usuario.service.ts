import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, EditUsuarioDto } from './DTO';
import { UsuarioEntity } from './Entity/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(UsuarioEntity) private readonly usuarioRepository:Repository<UsuarioEntity>){}

    async getItems(){
        const data = await this.usuarioRepository.find()
        if(!data[0])throw new NotFoundException('No se encontraron registros')
        return data;
    }
    async getOneItem(id:number){
        const data = await this.usuarioRepository.findOne(id)
        if(!data) throw new Error();
        return data;
    }

    async postItem(dto:CreateUsuarioDto){
        try {
            const data = this.usuarioRepository.create(dto)
            return await this.usuarioRepository.save(data)
        } catch (error) {
            return error
        }
    }
    async putItem(id:number,dto:EditUsuarioDto){
        try {
            const data = await this.getOneItem(id);
            const editeditem= Object.assign(data,dto)
            return await this.usuarioRepository.save(editeditem)
        } catch (error) {
            return error
        }
    }
    //findOne
    async getByUsername(usuario:string){
        const user = await this.usuarioRepository.find({usuario})
        if(!user[0])throw new NotFoundException()
        try {
        const data =  await this.usuarioRepository
        .createQueryBuilder('user')
        .where({usuario})
        .andWhere('user.estado = :estado', { estado: 'Activo' })
        .addSelect('user.password')
        .getOne()
        return data
        } catch (error) {
            return error;
        }
    }


}
