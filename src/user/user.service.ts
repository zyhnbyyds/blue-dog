import { Injectable } from '@nestjs/common'
import type { CreateUserInput } from './dto/create-user.input'
import type { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput) {
    return `This action adds a new user${createUserInput}`
  }

  findAll() {
    return 'This action returns all user'
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user ${updateUserInput}`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
