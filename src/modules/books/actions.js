const getBook = (isbn) => ({type: 'BOOKS/GET_BOOK', payload: {isbn}});

export default {
  getBook,
};