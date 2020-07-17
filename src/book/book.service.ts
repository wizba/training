import { Injectable } from '@nestjs/common';
import { book } from './booksDatabase/book.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {


    constructor(@InjectModel('Book') private studentRepository:Model<book>){}
}
