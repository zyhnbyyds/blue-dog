import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class AppResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!'
  }

  @Query(() => Number)
  sayAge(): number {
    return 111
  }
}
