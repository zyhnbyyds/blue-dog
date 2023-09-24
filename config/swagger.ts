import { registerAs } from '@nestjs/config'

/**
 * @description: Swagger 配置
 */
export function swaggerConfigObj() {
  return {
    title: process.env.SWAGGER_TITLE,
    description: process.env.SWAGGER_DESCRIPTION,
    version: process.env.SWAGGER_API_VERSION,
    apiPerfix: process.env.SWAGGER_APi_PERFIX,
    // TODO
    contact: {
      name: process.env.SWAGGER_CONTACT_NAME,
      url: process.env.SWAGGER_CONTACT_URL,
      email: process.env.SWAGGER_CONTACT_EMAIL,
    },
  }
}

export const swaggerConfig = registerAs('swagger', () => swaggerConfigObj())
