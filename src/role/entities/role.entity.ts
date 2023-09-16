import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Role {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
