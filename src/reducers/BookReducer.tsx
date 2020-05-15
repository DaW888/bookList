import { v4 as uuidv4 } from 'uuid';
import { bookProp } from '../contexts/BookContext';

export type BookReducerActionsType =
    | {
          type: 'ADD_BOOK';
          book: {
              title: string;
              author: string;
          };
      }
    | {
          type: 'REMOVE_BOOK';
          id: string;
      };

export const BookReducer = (state: Array<bookProp>, action: BookReducerActionsType) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, { title: action.book.title, author: action.book.author, id: uuidv4() }];
        case 'REMOVE_BOOK':
            return state.filter((book: bookProp) => book.id !== action.id);
        default:
            return state;
    }
};
