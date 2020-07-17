import { studentDto } from './../model/student.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student } from '../model/student.interface';
import { timeStamp } from 'console';
@Injectable()
export class StudentService {

     // testing
    products = [
        { id: 1, name: 'One Plus 7', price: 48000 },
        { id: 2, name: 'I Phone X', price: 64999 },
      ];
    constructor(@InjectModel('Student') private studentRepository:Model<student>){}

    // testing
    getData()
    {
        return this.products;
    }



    /**
     * 
     * @param studentObject student object passed through a post
     */
    async createStudent(studentObject:studentDto): Promise<student> {
       // const newCustomer = await this.studentRepository.create(studentObject)
        const newCustomer = await new this.studentRepository(studentObject)
        return newCustomer.save();
    }

    /**
     * 
     * @param studentID an id passed from the controller
     */
    async getStudent(studentID): Promise<student> {
        const _student = await this.studentRepository.findById(studentID).exec();
        return _student;
    }

    /**
     * 
     * @param studentID id passsed from student controller through routes
     * @param studentObject student details of update passed from student controller
     */

    async updateStudent(studentID,studentObject) : Promise<student> 
    {
        const _studentUpdate = await this.studentRepository.findByIdAndUpdate(studentID,studentObject,{ new: true });
        return _studentUpdate;
    }
    /**
     * 
     * @param studentID id passsed from student controller through routes
     * used for udating user information
     */

    async deleteStudent(studentID)
    {
        const deleted_student = await this.studentRepository.findByIdAndRemove(studentID);
        return  deleted_student;
    }

     // fetch all students
     async getAllStudents(): Promise<student[]> {
        const _student = await this.studentRepository.find().exec();
        return _student;
    }

}
