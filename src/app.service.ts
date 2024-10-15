import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class AppService {
  private users = [
    {
      id: 1,
      name: 'John',
      subject: 'History',
      email: 'john1@example.com',
      phone: '555-0101',
    },
    {
      id: 2,
      name: 'Isabella',
      subject: 'Science',
      email: 'isabella2@example.com',
      phone: '555-0102',
    },
    {
      id: 3,
      name: 'Olivia',
      subject: 'Physics',
      email: 'olivia3@example.com',
      phone: '555-0103',
    },
    {
      id: 4,
      name: 'Sophia',
      subject: 'Math',
      email: 'sophia4@example.com',
      phone: '555-0104',
    },
    {
      id: 5,
      name: 'Isabella',
      subject: 'History',
      email: 'isabella5@example.com',
      phone: '555-0105',
    },
    {
      id: 6,
      name: 'Alice',
      subject: 'Geography',
      email: 'alice6@example.com',
      phone: '555-0106',
    },
    {
      id: 7,
      name: 'John',
      subject: 'Physics',
      email: 'john7@example.com',
      phone: '555-0107',
    },
    {
      id: 8,
      name: 'David',
      subject: 'English',
      email: 'david8@example.com',
      phone: '555-0108',
    },
    {
      id: 9,
      name: 'Isabella',
      subject: 'Art',
      email: 'isabella9@example.com',
      phone: '555-0109',
    },
    {
      id: 10,
      name: 'Emma',
      subject: 'Art',
      email: 'emma10@example.com',
      phone: '555-0110',
    },
  ];
  //get all users - READ
  getAllUsers(): object {
    const users = this.users;
    if (!users) {
      throw new NotFoundException('No users found');
    }
    return users;
  }
  //get one user - READ
  getUser(id: string): object {
    const user = this.users.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  //create an user - CREATE
  createUser(createUserDTO: CreateUserDTO): object {
    const newUser = { id: this.users.length + 1, ...createUserDTO };
    this.users.push(newUser);
    console.log('User created:', newUser);
    console.log('Updated users list:', this.users);
    return newUser;
  }
  //update an user - UPDATE
  updateUser(id: string, updateUserDTO: UpdateUserDTO) {
    const user = this.users.find((user) => user.id === Number(id));
    if (user) {
      console.log(this.users);
      return { ...user, ...updateUserDTO };
    }
    return null;
  }
  //delete an user - DELETE
  userRemove(id: string): object {
    const user = this.users.find((user) => user.id === Number(id));
    if (user) {
      this.users = this.users.filter((user) => user.id != Number(id));
      return user;
    }
    return null;
  }
}
