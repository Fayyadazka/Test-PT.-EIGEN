import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { BorrowModule } from './borrow/borrow.module';
import { Book } from './books/entities/book.entity';
import { Member } from './members/entities/member.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'library',
            entities: [Book, Member],
            synchronize: true,
        }),
        BooksModule,
        MembersModule,
        BorrowModule,
    ],
})
export class AppModule { }
