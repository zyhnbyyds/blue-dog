import { registerAs } from '@nestjs/config'

/**
 * @description: Rides 配置
 */
export function ridesConfigObj() {
  return {
    host: process.env.RIDES_HOST,
    port: process.env.RIDES_PORT,
    url: process.env.RIDES_URL,
  }
}

export const ridesConfig = registerAs('rides', () => ridesConfigObj())
