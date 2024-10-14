// import { Controller, Get, Param, Query } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Get('/:id')
//   getHello(@Param('id') userId: string, @Query('search') search?: string) {
//     console.log(userId, search);
//     return {
//       userId,
//       search,
//     };
//   }
// }
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class CatsController {
  //GET, POST, PATCH, DELETE
  //It creates an insatance of the AppService class
  constructor(private readonly AppService: AppService) {}
  //GET ALL USERS
  @Get()
  getAll() {
    return this.AppService.getAllUsers();
  }
  //GET ONE USER WITH ID
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.AppService.getUser(id);
  }
  //CREATE AN USER
  @Post()
  createUser(@Body() user: { name: string; subject: string }) {
    return this.AppService.createUser(user);
  }
  //UPDATE AN USER
  @Patch(':id')
  getUpdate(@Param('id') id: string, @Body() updateUser: object) {
    return this.AppService.updateUser(id, updateUser);
  }
  //DELETE AN USER
  @Delete(':id')
  getDelete(@Param('id') id: string) {
    return id;
  }
}
