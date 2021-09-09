import React, { useState, useEffect } from 'react';
import { userLogin } from '../api/UserAPI'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('https://jared-cryptography.herokuapp.com/dashboard');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    userLogin(user)
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('https://jared-cryptography.herokuapp.com/dashboard');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <br></br><br></br><br></br><br></br>
      {loading === false && <h2>&ensp; Login</h2>}
      {errors === true && <h3>Cannot log in with provided credentials</h3>}
      {loading === false && (
        <form onSubmit={onSubmit}>
          <br></br>
          &emsp;&ensp;
          <label htmlFor='email'>Email address:</label> <br />
          &emsp;&ensp;
          <input
            name='email'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <br></br>
          &emsp;&ensp;
          <label htmlFor='password'>Password:</label> <br />
          &emsp;&ensp;
          <input
            name='password'
            type='password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />{' '}
          <br />
          <br></br><br></br>
          &emsp;&ensp;
          <input type='submit' value='Login' />
        </form>
      )}
    </div>
  );
};

export default Login;