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
    getData()
    {
        return this.products;
    }




    async addCustomer(createCustomerDTO): Promise<student> {
        const newCustomer = await this.studentRepository.create(createCustomerDTO)
        return newCustomer;
    }
}
