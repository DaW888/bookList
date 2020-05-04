import React, { useContext } from 'react';
import { BookContext, bookProp } from '../contexts/BookContext';
import { BookListLi, BookListTitle, BookListAuthor } from '../styledComponents/listStyled';

const BookDetails = ({ book }: { book: bookProp }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <BookListLi onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
            <BookListTitle>{book.title}</BookListTitle>
            <BookListAuthor>{book.author}</BookListAuthor>
        </BookListLi>
    );
};

export default BookDetails;
