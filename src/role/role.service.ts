import { Injectable } from '@nestjs/common'
import type { CreateRoleInput } from './dto/create-role.input'
import type { UpdateRoleInput } from './dto/update-role.input'

@Injectable()
export class RoleService {
  create(createRoleInput: CreateRoleInput) {
    return 'This action adds a new role' + `${createRoleInput}`
  }

  findAll() {
    return 'This action returns all role'
  }

  findOne(id: number) {
    return `This action returns a #${id} role`
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return `This action updates a #${id}${updateRoleInput} role`
  }

  remove(id: number) {
    return `This action removes a #${id} role`
  }
}
