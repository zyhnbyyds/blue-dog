import { registerAs } from '@nestjs/config'

/**
 * @description: GraphQL 配置
 */
export const graphqlConfigObj = {
  host: process.env.GRAPHQL_HOST,
  port: process.env.GRAPHQL_PORT,
  url: process.env.GRAPHQL_URL,
  apiVersion: process.env.GRAPHQL_API_VERSION,
  title: process.env.GRAPHQL_TITLE,
  description: process.env.GRAPHQL_DESCRIPTION,
}

export const graphqlConfig = registerAs('graphql', () => graphqlConfigObj)
