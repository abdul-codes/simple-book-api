import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    publisher: string;

    @Column()
    publicationYear: number;

    @Column({nullable: true})
    price?: number;
}

