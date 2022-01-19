import { Controller, Get, Post, Req, Res, HttpStatus, Body, Query, Param } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
@ApiTags('用户')
export class UserController {
  @Get()
  @ApiOperation({summary: '用户列表'})
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
    // return 'this action return all cats'
  }

  @Post()
  @ApiOperation({summary: '新增用户'})
  create(@Body() body: CreateUserDto, @Query() query, @Param() param) {
    return {
      success: true
    }
  }
}
