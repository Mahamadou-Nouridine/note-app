import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateAppDto } from './dto/createApp.dto';

@Controller('app')
export class ApplicationController {
  constructor(private applcationService: ApplicationService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createAppDto: CreateAppDto) {
    const newApp = await this.applcationService.create(createAppDto.name);
    return `App created successfully. AppId: ${newApp.uid}`;
  }
}
