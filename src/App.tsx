import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { GlobalStyle, AppWrapper } from './styledApp';

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <BookContextProvider>
                    <NavBar />
                    <BookList />
                    <BookForm />
                </BookContextProvider>
            </AppWrapper>
        </>
    );
}

export default App;
