import { v4 as uuidv4 } from 'uuid';
import { bookProp } from '../contexts/BookContext';

enum BookReducerActions {
    addBook = 'ADD_BOOK',
    removeBook = 'REMOVE_BOOK',
}

// type BookReducerActionType = {
//     type: 'REMOVE_BOOK', id: book.id
//     dispatch({ type: 'ADD_BOOK', book: { title, author } });
// }

type BookReducerActionsType =
    | {
          type: BookReducerActions.addBook;
          book: {
              title: string;
              author: string;
          };
      }
    | {
          type: BookReducerActions.removeBook;
          id: string;
      };

export const BookReducer = (state: Array<bookProp>, action: BookReducerActionsType) => {
    switch (action.type) {
        case BookReducerActions.addBook:
            return [...state, { title: action.book.title, author: action.book.author, id: uuidv4() }];
        case BookReducerActions.removeBook:
            return state.filter((book: bookProp) => book.id !== action.id);
        default:
            return state;
    }
};
