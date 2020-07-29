import React, { Fragment } from 'react';

const Identifiers = props => {
  const { identifiers } = props;
  const identifiersArr = [];

  for (let item in identifiers) {
    identifiersArr.push(item);
  }
  return (
    <div className="book__identifiers">
      <h3 className="section-subtitle book__subtitle">Identifiers: </h3>
      {
        identifiersArr.map(item => {
          return (<Fragment key={item}>
            <p><b>{item}:</b></p>
            <ul>
              {
                identifiers[item].map(idItem => <li key={idItem}>{idItem}</li>)
              }
            </ul>
          </Fragment>);
        })
      }
    </div>
  );
};

export default Identifiers;