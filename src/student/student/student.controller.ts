import { Controller, Get, Body, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
 
  constructor(private studentService: StudentService) {}
  @Post()
  postStudent(@Body() createCustomerDTO) {
    console.log(createCustomerDTO);
    return this.studentService.addCustomer(createCustomerDTO);
  }
}
