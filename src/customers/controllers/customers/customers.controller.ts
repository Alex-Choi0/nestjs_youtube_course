import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get(':id')
  getCustomer(@Param('id') id: number) {
    return this.customersService.findCustomerById(id);
  }
}
