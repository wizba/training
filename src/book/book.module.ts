import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { bookSchema } from './booksDatabase/book.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:'Book', schema: bookSchema }])],
  controllers: [BookController],
  providers: [BookService]
 
})
export class BookModule {}
