import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import type { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import logger from '../common/logger'

export function setupSwagger(app: INestApplication) {
  const { port } = app.get(ConfigService).get('common')
  const { title, description, version, apiPerfix } = app.get(ConfigService).get('swagger')

  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build()

  const swagger = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(apiPerfix, app, swagger)
  logger.info(`Apidoc is running on 🎉🎉 http://localhost:${port}${apiPerfix}`)
}
