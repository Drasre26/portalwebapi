import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()
  //app.enableCors({origin:'http://localhost:8080',credentials:true});
  app.enableCors();
  //Documentacion automatica
  initSwagger(app);

  //Hacer lista blanca 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true
    })
  )
  
  await app.listen(1990);
  logger.log(`Server on port ${await app.getUrl()}`)
  
}
bootstrap();
