import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ArticleController } from './article.controller';

@Module({
  imports: [],
  controllers: [ArticleController],
})
export class ArticleModule {}
