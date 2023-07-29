import { Module } from '@nestjs/common';
import { UrlModule } from './modules/url/url.module';

@Module({
  imports: [UrlModule],
})
export class AppModule {}
