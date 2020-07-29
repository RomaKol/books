import React, { useState } from 'react';
import { connect } from 'react-redux';
import BooksModule from 'modules/books';
import Book from 'components/Book';
import Input from 'components/Input';

const SearchBook = props => {
  const { getBook, book, isFetching, isFetched } = props;
  const [isbn, setIsbn] = useState('');

  const onSubmit = (value) => {
    setIsbn(value);
    getBook(value);
  };

  return (
    <div className="app-body">
      <div className="container">
        <Input onSubmit={onSubmit}/>
        {
          isFetching &&
          <p>Loading ...</p>
        }
        {
          isFetched
            ? (
              book && book[`ISBN:${isbn}`]
                ? <Book book={book[`ISBN:${isbn}`]}/>
                : <p>Book not found</p>
            )
            : null
        }
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    book: state.books.book,
    isFetching: state.books.isFetching,
    isFetched: state.books.isFetched
  }),
  {
    getBook: BooksModule.getBook
  }
)(SearchBook);