import { Module } from '@nestjs/common'
import { HdService } from './hd.service'
import { HdController } from './hd.controller'
import { TestModule } from 'src/test/test.module'

@Module({
  // 引入 test 模块
  imports: [TestModule],
  providers: [HdService],
  controllers: [HdController],
})
export class HdModule {}
