import { Controller, Get, Post, Req, Res, HttpStatus, Header, Body, Query, Param, HttpCode } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { get } from 'http';

@Controller('user')
@ApiTags('用户')
export class UserController {
  @Get()
  @Header('Cache-Control', 'none')
  @ApiOperation({summary: '用户列表'})
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
    // return 'this action return all cats'
  }

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(200)
  @ApiOperation({summary: '新增用户'})
  create(@Body() body: CreateUserDto, @Query() query, @Param() param) {
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({summary: '用户详情'})
  findOne(@Param() params): string {
    return 'user'
  }
}
