import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateBookDto {
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    publisher: string;

    @IsNumber()
    @IsNotEmpty()
    publicationYear: number;

    @IsNumber()
    price?: number;
} 