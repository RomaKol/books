import React, {useState} from 'react';

const Input = props => {
  const {onSubmit} = props;
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = () => {
    onSubmit(value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={value}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default Input;