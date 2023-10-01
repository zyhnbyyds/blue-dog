import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!'
  }

  @Query(() => String)
  sayAge(): string {
    return '18岁'
  }
}
