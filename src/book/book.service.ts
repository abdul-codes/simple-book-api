import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>) { }

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book | null> {
        return this.bookRepository.findOne({ where: { id } });
    }

    async create(book: Book): Promise<Book> {
        return this.bookRepository.save(book);
    }
}
