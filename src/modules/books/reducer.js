const initialState = {
  isFetching: false,
  isFetched: false,
  book: null,
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'BOOKS/GET_BOOK_REQUEST':
      return {...state, isFetching: true, isFetched: false};
    case 'BOOKS/GET_BOOK_FAILURE':
      return {...state, isFetching: false, isFetched: false};
    case 'BOOKS/GET_BOOK_SUCCESS':
      return {...state, isFetching: false, isFetched: true, book: {...payload.data}};
    case 'BOOKS/RESET':
      return initialState;
    default:
      return state;
  }
};

export default reducer;