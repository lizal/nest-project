import { Controller, Get, Post, Req, Res,HttpStatus, HttpCode, Header, Param, Body } from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
    // return 'this action return all cats'
  }
  
  @Get(':id')
  findOne(@Param('id') id): string {
    return `this action return a #${id} cats`
  }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'this.action add a cat'
  }
}
