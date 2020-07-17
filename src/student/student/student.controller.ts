import { Controller, Get, Body, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
 
  constructor(private studentService: StudentService) {}
  @Post()
  postStudent(@Body() studentDto) {
    console.log(studentDto);
    return this.studentService.createStudent(studentDto);
  }
}
