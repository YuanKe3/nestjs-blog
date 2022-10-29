import { Module } from '@nestjs/common';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ path: path.resolve(__dirname, './abc') }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
