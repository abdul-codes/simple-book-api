import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    publisher: string;

    @IsNotEmpty()
    @IsNumber()
    publicationYear: number;

    @IsOptional()
    @IsNumber()
    price?: number;
} 