import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api/v3');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true, })
    );

  await app.listen(3000);
}
bootstrap();
