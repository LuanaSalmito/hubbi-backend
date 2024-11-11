import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001', 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Configuração do Swagger
  const options = new DocumentBuilder()
    .setTitle('Vendas Hubbi API')
    .setDescription('API do desafio sistema de vendas, para a empresa Hubbi.')
    .setVersion('1.0')
    .addTag('hubbi')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-hubbi', app, document);

  // Porta de escuta da aplicação
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
