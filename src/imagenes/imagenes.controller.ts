import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { renombrarPortada } from './helpers/imagenes.helper';

@Controller('/api/v1/imagenes')
export class ImagenesController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {storage:diskStorage({destination:'./imagenes',filename:renombrarPortada})} ))
        uploadFile(@UploadedFile() file: Express.Multer.File) {
       return of(file);
    }

    @Get(':boleta')
    getFile(@Param('boleta') boleta:string,@Res() res):Observable<any> {
        const file = res.sendFile(join(process.cwd(), 'imagenes/'+boleta));
        return of(file);
    }

}
