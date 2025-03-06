import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

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
    async create(@Body() book: Book): Promise<Book> {
        return this.bookService.create(book)
    }

}



