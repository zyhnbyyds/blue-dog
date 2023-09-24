import { registerAs } from '@nestjs/config'

export function commonConfigObj() {
  return {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    env: process.env.NODE_ENV,
  }
}

/**
 * @description: 公共配置
 */
export const commonConfig = registerAs('common', () => (commonConfigObj()))
