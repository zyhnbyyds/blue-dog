import type { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Cat } from '../schemas/user.schema'

@Injectable()
export class AuthService {
  constructor(@InjectModel(Cat.name) private CatModel: Model<Cat>) {}

  async create(createCatDto: { name: string; age: number }): Promise<Cat> {
    const createdCat = new this.CatModel(createCatDto)
    return createdCat.save()
  }

  async findAll(): Promise<Cat[]> {
    return this.CatModel.find().exec()
  }
}
