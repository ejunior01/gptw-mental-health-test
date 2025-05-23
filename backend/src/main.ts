import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('Survey Manager')
    .setDescription(
      'Aplicação para o gerenciamento e armazenamento de pesquisas',
    )
    .setVersion('1.0')
    .addServer('http://localhost:3001/', 'Local environment')
    .addServer('http://localhost:3001/', 'Production')
    .addTag('SurveyManager')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
