import { NestFactory } from '@nestjs/core'
import { commonConfigObj } from '../config'
import { AppModule } from './app.module'
import { setupSwagger } from './setup/swagger'
import logger from './common/logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const { port } = commonConfigObj()

  setupSwagger(app)

  logger.info(`Graphql server is running on: http://localhost:${port}/graphql`)

  app.enableCors()

  await app.listen(port)
}
bootstrap()
