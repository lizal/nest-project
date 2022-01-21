import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({description: '用户账号'})
  account: string;
  @ApiProperty({description: '用户姓名'})
  name: string;
  @ApiProperty({description: '用户手机号'})
  phone?: string;
}