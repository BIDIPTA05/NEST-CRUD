import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { name: 'John', id: 1, subject: 'History' },
    { name: 'Isabella', id: 2, subject: 'Science' },
    { name: 'Olivia', id: 3, subject: 'Physics' },
    { name: 'Sophia', id: 4, subject: 'Math' },
    { name: 'Isabella', id: 5, subject: 'History' },
    { name: 'Alice', id: 6, subject: 'Geography' },
    { name: 'John', id: 7, subject: 'Physics' },
    { name: 'David', id: 8, subject: 'English' },
    { name: 'Isabella', id: 9, subject: 'Art' },
    { name: 'Emma', id: 10, subject: 'Art' },
  ];
  //get all users - READ
  getAllUsers(): object {
    return this.users;
  }
  //get one user - READ
  getUser(id: string): object {
    return this.users.find((user) => user.id === Number(id));
  }
  //create an user - CREATE
  createUser(user: { name: string; subject: string }): object {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    console.log('User created:', newUser);
    console.log('Updated users list:', this.users);
    return newUser;
  }
  //update an user - UPDATE
  updateUser(id: string, update: { name?: string; subject?: string }) {
    const user = this.users.find((user) => user.id === Number(id));
    if (user) {
      console.log(this.users);
      return { ...user, ...update };
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
