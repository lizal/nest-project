import { TypeOrmModule } from '@nestjs/typeorm'
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { loggerMiddleware } from './common/middleware/logger.middleware';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity'
import { UsersHttpModule } from './users-http/users-http.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      synchronize: true
    }),
    CatsModule,
    UserModule,
    UsersHttpModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(loggerMiddleware).forRoutes({path:'cats', method: RequestMethod.GET})
//   }
// }
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
