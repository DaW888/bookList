import styled from 'styled-components';

export const BookListWrapper = styled.div`
    margin: 20px;
`;

export const BookListUl = styled.ul`
    padding: 0;
    list-style-type: none;
`;

export const BookListLi = styled.li`
    background: #1b1c90;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    margin: 10px 0;

    :hover {
        opacity: 0.7;
        text-decoration: line-through;
    }
`;

export const BookListTitle = styled.div`
    font-weight: bold;
    color: #fff;
    font-size: 1.2em;
`;

export const BookListAuthor = styled.div`
    font-size: 0.9em;
    color: #ddd;
`;

export const BookListEmpty = styled.div`
    margin: 20px;
    text-align: center;
`;
