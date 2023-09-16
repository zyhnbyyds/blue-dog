import { Field, ObjectType } from '@nestjs/graphql'
import { Role } from '@/role/entities/role.entity'

@ObjectType()
export class User {
  @Field({ description: 'user name' })
  userName: string

  @Field({ description: 'age', nullable: true })
  age?: string

  @Field(() => [Role])
  role: Role[]
}
