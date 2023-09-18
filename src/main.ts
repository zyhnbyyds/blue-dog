import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import logger from './common/logger'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = 3000

  const config = new DocumentBuilder()
    .setTitle('一只忧伤的狗')
    .setDescription('想变成一只会飞的猪，怎末办啊😕')
    .setVersion('0.0.1')
    .build()

  const swagger = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('apidocs', app, swagger)
  await app.listen(port)

  logger.info(`Apidoc is running on http://localhost:${port}/apidocs`)
  logger.error('Test error log')
  logger.warn('Test warn log')
  logger.debug('Rest\\\\\\')

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
