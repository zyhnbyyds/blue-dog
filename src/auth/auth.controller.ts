import { Body, Controller, Post } from '@nestjs/common'
import type { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/add')
  Add(@Body() test: { name: string; age: number }) {
    return this.authService.create(test)
  }
}
