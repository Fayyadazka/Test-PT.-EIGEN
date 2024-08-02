import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({ default: 0 })
    borrowedBooks: number;

    @Column({ default: false })
    penalized: boolean;
}
