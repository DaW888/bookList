import React, { useContext } from 'react';
import { BookContext, bookProp } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import { BookListUl, BookListWrapper, BookListEmpty } from '../styledComponents/listStyled';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <BookListWrapper>
            <BookListUl>
                {books.map((book: bookProp) => (
                    <BookDetails book={book} key={book.id} />
                ))}
            </BookListUl>
        </BookListWrapper>
    ) : (
        <BookListEmpty>No books to read. Free time!</BookListEmpty>
    );
};

export default BookList;
