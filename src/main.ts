import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger()
  await app.listen(1990);
  logger.log(`Server corriendo en ${await app.getUrl()}`)
}
bootstrap();
