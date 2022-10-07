import { Injectable } from '@nestjs/common'

@Injectable()
export class DevService {
  get() {
    return 'dev service dev method'
  }
}
