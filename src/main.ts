import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('一只忧伤的狗')
    .setDescription('想变成一只会飞的猪，怎末办啊😕')
    .setVersion('0.0.1')
    .build();

  const swagger = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidocs', app, swagger);

  await app.listen(3000);
}
bootstrap();
