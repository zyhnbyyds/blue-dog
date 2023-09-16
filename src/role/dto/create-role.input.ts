import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateRoleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
