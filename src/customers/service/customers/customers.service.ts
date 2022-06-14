import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'alex1@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'alex2@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'alex3@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'alex4@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => {
      return user.id === id;
    });
  }
}
