import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Cat, CatSchema } from '../schemas/user.schema'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
