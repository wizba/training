import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './model/student.schema';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
    imports: [MongooseModule.forFeature([{ name:'Student', schema: StudentSchema }])],
    controllers: [StudentController],
    providers: [StudentService],
})

export class StudentModule {}