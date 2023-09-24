import { NestFactory } from '@nestjs/core'
import { commonConfigObj } from '../config'
import { AppModule } from './app.module'
import { setupSwagger } from './setup/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const { port } = commonConfigObj()

  setupSwagger(app)

  await app.listen(port)
}
bootstrap()
