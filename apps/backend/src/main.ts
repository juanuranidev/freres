import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: '*',
  });

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );


  const PORT = AppModule.PORT;

  const server = await app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  server.setTimeout(30000);
}

bootstrap();
