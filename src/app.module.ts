import { Module } from '@nestjs/common'
import type { ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloDriver } from '@nestjs/apollo'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { commonConfig, graphqlConfig, mongoConfig, ridesConfig, swaggerConfig } from '../config'
import { AppResolver } from './app.resolver'
import { isDev } from './utils/isDev'
import { CommonModule } from './common/common.module'
import { envValidate } from '@/validate/env'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],

    }),
    ConfigModule.forRoot({
      envFilePath: isDev(),
      load: [commonConfig, ridesConfig, mongoConfig, graphqlConfig, swaggerConfig],
      validationSchema: envValidate,
    }),
    CommonModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
