import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer, BookReducerActionsType } from '../reducers/BookReducer';

type Props = {
    children: React.ReactNode;
};

export type bookProp = {
    title: string;
    author: string;
    id: string;
};

type ContextType = {
    books: bookProp[];
    dispatch: React.Dispatch<BookReducerActionsType>;
};

export const BookContext = createContext<ContextType>({ books: [], dispatch: (): void => {} });

const BookContextProvider = ({ children }: Props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        console.log(books, dispatch);
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return <BookContext.Provider value={{ books, dispatch }}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
