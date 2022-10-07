import { Module } from '@nestjs/common'
import { config } from 'dotenv'
import path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigService } from './config.service'
import { HdModule } from './hd/hd.module'
import { TestModule } from './test/test.module'

config({ path: path.join(__dirname, '../.env') })
console.log(process.env.NODE_ENV)

@Module({
  imports: [HdModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'DbService',
      useFactory: async () => {
        return new Promise((r) => {
          setTimeout(() => {
            r('yuanke')
          }, 3000)
        })
      },
    },
  ],
})
export class AppModule {}
