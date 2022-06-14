import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/payments/dto/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  private users = [
    {
      email: 'alex@gmail.com',
    },
    {
      email: 'stuy@gmail.com',
    },
    {
      email: 'json@gmail.com',
    },
  ];

  createPayment(dto: CreatePaymentDto) {
    const { email } = dto;
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      throw new BadRequestException();
    }
    return {
      status: 'success',
    };
  }
}
