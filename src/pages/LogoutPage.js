import React, { useState, useEffect, Fragment } from 'react';
import { userLogout } from '../api/UserAPI'

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('https://jared-cryptography.herokuapp.com/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    userLogout()
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('https://jared-cryptography.herokuapp.com/login');
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <br></br><br></br><br></br><br></br>
          <h3>&ensp; Are you sure you want to logout?</h3>
          <br></br>
          &emsp;
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;