import { useState } from 'react';
import './SimpleForm.css';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>REGISTER</h3>

      <div>
        <label htmlFor="form-name">Name: </label>
        <input
          value={name}
          type="text"
          placeholder="Enter you fullname"
          id="form-name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="form-email">Email: </label>
        <input
          value={email}
          type="text"
          placeholder="Enter you email"
          id="form-email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
