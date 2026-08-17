import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('/ 的控制器');
    // 响应什么内容？交给service 层
    // this -> Module
    return this.appService.getHello();
  }
}
