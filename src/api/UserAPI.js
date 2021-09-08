const fetchUser = () => {
  return fetch('https://cryptoapi-cp.herokuapp.com/accounts/auth/user/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
};

const fetchSecretsByUser = () => {
  return fetch('https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
};

const fetchSecretByID = (secretID) => {
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/${secretID}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
};

const userLogin = (user) => {
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json());
};

const userSignup = (user) => {
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => response.json());
};

const addSecret = (secretObject) => {
  return fetch('https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(secretObject)
  })
  .then(response => response.json())
};

const editSecretByID = (secretID, secretObject) => {
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/${secretID}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(secretObject)
  })
    .then(response => response.json())
};

const deleteSecretByID = (secretID) => {
  console.log('delectSecretByID called', secretID)
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/user/secrets/${secretID}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
};

const userLogout = (secretID) => {
  return fetch(`https://cryptoapi-cp.herokuapp.com/accounts/auth/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
};

export {
  fetchUser,
  userLogin,
  userSignup,
  fetchSecretsByUser,
  addSecret,
  fetchSecretByID,
  deleteSecretByID ,
  editSecretByID,
  userLogout
};
