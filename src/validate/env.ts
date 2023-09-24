import * as Joi from '@hapi/joi'

/**
 * @description ENV-配置校验
 */
export const envValidate = Joi.object({
  // COMMON
  NODE_ENV: Joi.string().valid('dev', 'prod').default('dev'),
  SERVER_PORT: Joi.number().default(5000),
  SERVER_HOST: Joi.string().default('127.0.0.1'),

  // MONGO
  MONGO_HOST: Joi.string().default('127.0.0.1'),
  MONGO_PORT: Joi.number().default(27017),
  MONGO_DBNAME: Joi.string().default('test'),
  MONGO_USERNAME: Joi.string().default(''),
  MONGO_PASSWORD: Joi.string().default(''),

  // REDIS
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),
  REDIS_DB: Joi.number().default(0),
  REDIS_PASSWORD: Joi.string().default('123456'),

  // SWAGGER
  SWAGGER_HOST: Joi.string().default('localhost'),
  SWAGGER_PERFIX: Joi.string().default('/api-docs'),
  SWAGGER_API_VERSION: Joi.string().default('1.0.0'),
  SWAGGER_TITLE: Joi.string().default('blue-dog'),
  SWAGGER_DESCRIPTION: Joi.string().default('be a good man'),

  // GRAPHQL
  GRAPHQL_HOST: Joi.string().default('localhost'),
  GRAPHQL_PORT: Joi.number().default(5000),
  GRAPHQL_URL: Joi.string().default('/graphql'),
  GRAPHQL_API_VERSION: Joi.string().default('1.0.0'),
  GRAPHQL_TITLE: Joi.string().default('GRAPHQL_TITLE'),
  GRAPHQL_DESCRIPTION: Joi.string().default('GRAPHQL_DESCRIPTION'),
})
