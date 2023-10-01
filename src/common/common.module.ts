import { Module } from '@nestjs/common'
import { LoggingPlugin } from './common.provider'

@Module({
  providers: [LoggingPlugin],
})
export class CommonModule {}
