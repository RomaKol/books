const getBookRequest = () => ({type: 'BOOKS/GET_BOOK_REQUEST'});
const getBookFailure = () => ({type: 'BOOKS/GET_BOOK_FAILURE'});
const getBookSuccess = (data) => ({type: 'BOOKS/GET_BOOK_SUCCESS', payload: {data}});
const getBook = (isbn) => ({type: 'BOOKS/GET_BOOK', payload: {isbn}});

export default {
  getBook, getBookRequest, getBookFailure, getBookSuccess,
};