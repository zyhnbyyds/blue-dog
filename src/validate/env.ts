import * as Joi from '@hapi/joi'

// env文件格式校验
export const envValidate = Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'prod', 'test').default('dev'),
  SERVER_PORT: Joi.number().default(3000),
  SERVER_HOST: Joi.string().default('localhost'),
})
