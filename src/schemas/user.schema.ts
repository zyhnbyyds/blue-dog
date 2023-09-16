import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type CatDocument = HydratedDocument<Cat>

@Schema()
export class Cat {
  @Prop()
  id: number

  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
