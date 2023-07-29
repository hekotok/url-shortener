import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UrlService {
  private urlMap = new Map<string, string>();

  async shortenUrl(longUrl: string): Promise<string> {
    const shortUrl = uuidv4().slice(0, 6);
    this.urlMap.set(shortUrl, longUrl);
    return `http://localhost:3000/shorten/${shortUrl}`;
  }

  async getLongUrl(shortUrl: string): Promise<string> {
    return this.urlMap.get(shortUrl);
  }
}
