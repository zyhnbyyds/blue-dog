export { }

/**
 * @global
 * @namespace NodeJS
 */
declare global {
  namespace NodeJS {
    /**
     * @interface ProcessEnv
     */
    interface ProcessEnv {
      /**
       * 运行环境
       */
      NODE_ENV: 'dev' | 'prod';
      /**
       * 服务器端口
       */
      SERVER_PORT: number;
      /**
       * 服务器主机名
       */
      SERVER_HOST: string;
      /**
       * MongoDB 主机名
       */
      MONGO_HOST: string;
      /**
       * MongoDB 端口号
       */
      MONGO_PORT: number;
      /**
       * MongoDB 数据库名
       */
      MONGO_DBNAME: string;
      /**
       * MongoDB 用户名
       */
      MONGO_USERNAME: string;
      /**
       * MongoDB 密码
       */
      MONGO_PASSWORD: string;
      /**
       * Redis 主机名
       */
      REDIS_HOST: string;
      /**
       * Redis 端口号
       */
      REDIS_PORT: number;
      /**
       * Redis 数据库编号
       */
      REDIS_DB: number;
      /**
       * Redis 密码
       */
      REDIS_PASSWORD: string;
      /**
       * Swagger 主机名
       */
      SWAGGER_HOST: string;
      /**
       * Swagger 端口号
       */
      SWAGGER_PORT: number;
      /**
       * Swagger URL
       */
      SWAGGER_URL: string;
      /**
       * Swagger API 版本
       */
      SWAGGER_API_VERSION: string;
      /**
       * Swagger 标题
       */
      SWAGGER_TITLE: string;
      /**
       * Swagger 描述
       */
      SWAGGER_DESCRIPTION: string;
      /**
       * GraphQL 主机名
       */
      GRAPHQL_HOST: string;
      /**
       * GraphQL 端口号
       */
      GRAPHQL_PORT: number;
      /**
       * GraphQL URL
       */
      GRAPHQL_URL: string;
      /**
       * GraphQL API 版本
       */
      GRAPHQL_API_VERSION: string;
      /**
       * GraphQL 标题
       */
      GRAPHQL_TITLE: string;
      /**
       * GraphQL 描述
       */
      GRAPHQL_DESCRIPTION: string;
      /**
       * GraphQL 调试模式
       */
      GRAPHQL_DEBUG: boolean;
    }
  }
}
