import type { ApolloServerPlugin, GraphQLRequestContext, GraphQLRequestListener } from '@apollo/server'
import { Plugin } from '@nestjs/apollo'

import logger from '@/utils/logger'

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener<{ test: '111'; req: any }>> {
    return {
      async willSendResponse(requestContext) {
        const { response, request, contextValue } = requestContext
        // 根据时间戳生成唯一id
        const requestid = Date.now().toString(36)

        logger.info(`${request.query} ==> ${JSON.stringify(response.body)} \n headers => ${JSON.stringify(contextValue.req.headers)} --success --id=${requestid}`)
      },
    }
  }
}
