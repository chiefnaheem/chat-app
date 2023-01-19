import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeormStore } from 'connect-typeorm/out';
import { Session } from './auth/entities/session.entity';
import { migrationsDataSource } from './data-source';
import { getRepository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(3006);
}
bootstrap();
