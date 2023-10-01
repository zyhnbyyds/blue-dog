import type { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql'
import logger from '@/common/logger'

// graphql middleware
export const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next()

  logger.info(value, ctx)

  return value
}
