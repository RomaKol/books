import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import BooksModule from 'modules/books';
import Book from 'components/Book';
import Input from 'components/Input';


const App = props => {
  const {getBook, book, isFetching, isFetched} = props;
  const [isbn, setIsbn] = useState('');

  const onSubmit = (value) => {
    setIsbn(value);
    getBook(value);
  }

  return (
    <div className="App">
      <Input onSubmit={onSubmit} />
      {
        isFetched
          ? (
            book && book[`ISBN:${isbn}`]
              ? <Book book={book[`ISBN:${isbn}`]}/>
              : <div>Book not found</div>
          )
          : null
      }
    </div>
  );
}

export default connect(
  (state) => ({
    book: state.books.book,
    isFetching: state.books.isFetching,
    isFetched: state.books.isFetched,
  }),
  {
    getBook: BooksModule.getBook,
  }
)(App);
