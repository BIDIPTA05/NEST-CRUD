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
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class CatsController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  //GET, POST, PATCH, DELETE
  //It creates an instance of the AppService class
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
  createUser(@Body(ValidationPipe) createUserDTO: CreateUserDTO) {
    return this.AppService.createUser(createUserDTO);
  }
  //UPDATE AN USER
  @Patch(':id')
  getUpdate(
    @Param('id') id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDTO,
  ) {
    return this.AppService.updateUser(id, updateUserDto);
  }
  //DELETE AN USER
  @Delete(':id')
  getDelete(@Param('id') id: string) {
    return id;
  }
}
