import React, {useState, useEffect, Fragment} from 'react';

const Identifiers = props => {
  const {identifiers} = props;
  const identifiersArr = [];

  for (let item in identifiers) {
    identifiersArr.push(item);
  }
  return (
    <div className="book__identifiers">
      {
        identifiersArr.map(item => {
          return (<Fragment key={item}>
            <p>{item}:</p>
            <ul>
              {
                identifiers[item].map(idItem => <li key={idItem}>{idItem}</li>)
              }
            </ul>
          </Fragment>)
        })
      }
    </div>
  );
}

const Book = props => {
  const {book} = props;
  console.log("book", book)

  return (
    <div className="book">
      <h2 className="book__title">{book.title}</h2>
      <p className="book__link"><a href={book.url} target="_blank">{book.url}</a></p>
      <p className="book__pages">Pages: {book.number_of_pages}</p>
      <p className="book__published">Publish date: {book.publish_date}</p>
      <div className="book__authors">
        <h3 className="book__subtitle">Authors:</h3>
        <ul className="book__authors-list">
          {
            book.authors.map(author => {
              return (
                <li key={author.name} className="book__author"><a href={author.url} target="_blank">{author.name}</a>
                </li>)
            })
          }
        </ul>
      </div>
      <div className="book__cover"><img src={book.cover.medium}/></div>
      <Identifiers identifiers={book.identifiers}/>
    </div>
  );
}

export default Book;