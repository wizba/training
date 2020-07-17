import { Controller, Get, Body, Post, Res, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { studentDto } from '../model/student.dto';

@Controller('student')
export class StudentController {
 
  constructor(private studentService: StudentService) {}
  @Post()
  postStudent(@Body() studentDto) {
    console.log(studentDto);
    return this.studentService.createStudent(studentDto);
  }

  // Retrieve student list
  @Post('/create')
    async addCustomer(@Res() res, @Body() createStudentDto: studentDto) {
        const student = await this.studentService.createStudent(createStudentDto);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been created successfully",
            student
        })
    }

    // Retrieve student list
    @Get('/All')
    async getAllCustomer(@Res() res) {
        const _student = await this.studentService.getAllStudents();
        return res.status(HttpStatus.OK).json(_student);
    }

    // Fetch a particular customer using ID
    @Get('/:studentID')
      async getCustomer(@Res() res, @Param('studentID') studentID) {
          const _student = await this.studentService.getStudent(studentID);
          if (!_student) throw new NotFoundException('Customer does not exist!');
          return res.status(HttpStatus.OK).json(_student);
      }


      //implement delete by yourself
}
