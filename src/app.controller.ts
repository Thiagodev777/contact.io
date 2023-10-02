import { Controller, Get } from '@nestjs/common';
import { name, version, author } from '../package.json';

@Controller()
export class AppController {
  @Get()
  async findInfoApplication() {
    return { name, author, version };
  }
}
