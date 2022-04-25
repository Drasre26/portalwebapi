import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const initSwagger = (app:INestApplication)=>{
    const swaggerConfig = new DocumentBuilder().setTitle('API CUNSURORI')
    .addBearerAuth()
    .setDescription('Documentación Api rest CUNSURORI virtual. Para la realización de algunas peticiones es necesario un TOKEN')
    .build()

    const document = SwaggerModule.createDocument(app,swaggerConfig)
    SwaggerModule.setup('/docs',app,document)
}