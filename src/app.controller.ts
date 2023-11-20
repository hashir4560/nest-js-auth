import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUserById } from './utils';
import { JwtAuthGuard } from './utils/guards/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@GetCurrentUserById() userId: number): string {
    return this.appService.getHello(userId);
  }
}
