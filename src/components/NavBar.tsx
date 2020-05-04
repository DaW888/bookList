import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { NavBarWrapper } from '../styledComponents/NavBar';
import { H1 } from '../styledComponents/textStyled';

const NavBar: React.FC = () => {
    const { books } = useContext(BookContext);
    return (
        <NavBarWrapper>
            <H1>Reading Books</H1>
            <p>Currently you have {books.length} books</p>
        </NavBarWrapper>
    );
};

export default NavBar;
