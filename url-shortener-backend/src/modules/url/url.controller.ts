import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { UrlService } from './url.service';

interface ShortUrlDto {
  shortUrl: string;
}

interface UrlDto {
  url: string;
}

@Controller('shorten')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async shortenUrl(@Body('longUrl') longUrl: string): Promise<ShortUrlDto> {
    return { shortUrl: await this.urlService.shortenUrl(longUrl) };
  }

  @Get(':shortUrl')
  @Redirect()
  async redirect(@Param('shortUrl') shortUrl: string): Promise<UrlDto> {
    const url: any = await this.urlService.getLongUrl(shortUrl);
    return { url };
  }
}
