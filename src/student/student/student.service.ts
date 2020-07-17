import { studentDto } from './../model/student.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student } from '../model/student.interface';
@Injectable()
export class StudentService {
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

    async getStudent(studentID): Promise<student> {
        const _student = await this.studentRepository.findById(studentID).exec();
        return _student;
    }



}
