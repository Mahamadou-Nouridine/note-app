import { Controller, Post } from '@nestjs/common';
import { ApplicationService } from './application.service';

@Controller('app')
export class ApplicationController {
  constructor(private applcationService: ApplicationService) {}

  @Post()
  async create() {
    const newApp = await this.applcationService.create();
    return `App created successfully. AppId: ${newApp.uid}`;
  }
}
