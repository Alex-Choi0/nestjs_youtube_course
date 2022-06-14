import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  createPayment() {
    return {
      id: 1,
      status: 'success',
    };
  }
}
