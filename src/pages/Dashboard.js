import React, { useState, useEffect, Fragment } from 'react';
import SecretsList from '../components/SecretsList';
import { fetchUser, fetchSecretsByUser } from '../api/UserAPI'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const [userName, setUserName] = useState('');
  const [secretMessages, setSecretMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://jared-cryptography.herokuapp.com/login');
    } else {
      fetchUser()
        .then(data => {
          setLoading(false);
          setUserName(data.username);
        });

      fetchSecretsByUser()
        .then(data => {
          setLoading(false);
          setSecretMessages(data)
      });
      }
    }, []);

  return (
    <div>
      {loading === false && (
        <Fragment>
          <br></br>
          <h2>&ensp;&ensp; User Dashboard</h2>
          <br></br>
          <h2>&ensp;&ensp; Hello {userName}!</h2>
          <br></br>
          <h3>&emsp;&ensp; <Link to={`/dashboard/secrets/add`}>New Secret &#43;</Link></h3>
          <br></br>
          &ensp;
          <SecretsList secrets={secretMessages}/>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;