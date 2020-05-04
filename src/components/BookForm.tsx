import React, { useContext, useState, useRef } from 'react';
import { BookContext } from '../contexts/BookContext';
import { FormWrapper, TextInput, SubmitAddBook } from '../styledComponents/formStyled';

const BookForm: React.FC = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    const titleRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author } });
        setTitle('');
        setAuthor('');
        titleRef.current?.focus();
    };
    return (
        <FormWrapper onSubmit={handleSubmit}>
            <TextInput
                ref={titleRef}
                type="text"
                placeholder="book title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                required
            />
            <TextInput
                type="text"
                placeholder="book author"
                value={author}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
                required
            />
            <SubmitAddBook type="submit" value="add book" />
        </FormWrapper>
    );
};

export default BookForm;
