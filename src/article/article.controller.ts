import { Controller, Get } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Controller('article')
export class ArticleController {
  // 引入 ConfigService，以便读取 configure 文件夹中的文件内容
  constructor(private readonly config: ConfigService) {}
  @Get()
  index() {
    return 'index article' + this.config.get('app.name');
  }
}
