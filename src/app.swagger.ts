import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initSwagger = (app:INestApplication)=>{
    const swaggerConfig = new DocumentBuilder().setTitle('API DOCUMENTACIÓN')
    .addBearerAuth()
    .setDescription('Documentación Api rest Portal Web UMG. Para la realización de algunas peticiones es necesario un TOKEN')
    .build()

    const document = SwaggerModule.createDocument(app,swaggerConfig)
    SwaggerModule.setup('/docs',app,document)
}