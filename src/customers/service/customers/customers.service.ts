import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'alex@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomer(id: number) {
    console.log('id : ', id);
    console.log('id(typeof) : ', typeof id);
    for (let i = 0; i < this.users.length; i++) {
      console.log('DB id : ', this.users[i].id);
      console.log(this.users[i].id === id);
      if (this.users[i].id === Number(id)) {
        return this.users[i];
      }
    }
    return [];
  }
}
