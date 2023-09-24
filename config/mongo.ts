import { registerAs } from '@nestjs/config'

/**
 * @description: MongoDB 配置
 */
export function mongoConfigObj() {
  return {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    dbName: process.env.MONGO_DBNAME,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
  }
}

export const mongoConfig = registerAs('mongo', () => mongoConfigObj())
