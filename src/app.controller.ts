import { Controller, Get, Inject } from '@nestjs/common'

@Controller()
export class AppController {
  constructor(
    @Inject('DbService')
    private readonly dbService: string,
  ) {}

  @Get()
  getHello(): string {
    return this.dbService
  }
}
