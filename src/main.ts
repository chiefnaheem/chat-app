import { Session, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { getRepositoryToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const sessionRepoistory = getRepositoryToken(Session);
  app.use(session({
    secret: process.env.COOKIES_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 86400000,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    }
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3006);
}
bootstrap();
