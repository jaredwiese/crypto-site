import React, { useState, useEffect } from 'react';
import { userSignup } from '../api/UserAPI';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('https://jaredwiese.github.io/crypto-site/dashboard');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2
    };

    userSignup(user)
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('https://jaredwiese.github.io/crypto-site/dashboard');
        } else {
          setEmail('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <br></br><br></br><br></br><br></br>
      {loading === false && <h2>&ensp; Signup</h2>}
      {errors === true && <h2>&ensp; Cannot signup with provided credentials</h2>}
      <form onSubmit={onSubmit}>
        <br></br>
        &emsp;&ensp;
        <label htmlFor='email'>Email address:</label> <br />
        &emsp;&ensp;
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        &emsp;&ensp;
        <label htmlFor='password1'>Password:</label> <br />
        &emsp;&ensp;
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        &emsp;&ensp;
        <label htmlFor='password2'>Confirm password:</label> <br />
        &emsp;&ensp;
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <br></br>
        &emsp;&ensp;
        <input type='submit' value='Signup' />
      </form>
    </div>
  );
};

export default Signup;