import { Module } from '@nestjs/common'
import { TestService } from './test.service'

@Module({
  providers: [
    TestService,
    {
      provide: 'test',
      useValue: '测试的 test 服务',
    },
  ],
  // test 组件暴露了自己的 service
  exports: [TestService, 'test'],
})
export class TestModule {}
