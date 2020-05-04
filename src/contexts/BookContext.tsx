import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

type Props = {
    children: React.ReactNode;
};

export type bookProp = {
    title: string;
    author: string;
    id: string;
};

export const BookContext: React.Context<any> = createContext(null);

const BookContextProvider = ({ children }: Props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return <BookContext.Provider value={{ books, dispatch }}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
