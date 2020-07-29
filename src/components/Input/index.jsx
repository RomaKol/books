import React, { useState } from 'react';

const Input = props => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <div className="search">
      <input type="text" onChange={handleChange} value={value} className="search__input"/>
      <button onClick={handleSubmit} disabled={!value} className="search__button">Search</button>
    </div>
  );
};

export default Input;