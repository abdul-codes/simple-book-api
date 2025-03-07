import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    async findAll(): Promise<Book[]> {
     return this.bookService.findAll()   
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book | null> {
        return this.bookService.findOne(id)
    }

    @Post()
    async create(@Body() book: CreateBookDto): Promise<Book> {
        return this.bookService.create(book)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() book: Book): Promise<Book | null> {
        return this.bookService.update(id, book)
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.bookService.delete(id);
    }

}



