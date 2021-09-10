import React, { useState, useEffect, Fragment } from 'react';
import logo from '../assets/img/logo.jpg';

const PageWrapper = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">CRYPTOGRAPHY</span>
        <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={logo} alt="..." /></span>
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/affine">Affine Cipher</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/caesar">Caesar Cipher</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/onetimepad">One Time Pad</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/substitution">Substitution Cipher</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/transposition">Transposition Cipher</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/vigenere">Vigenere Cipher</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" ></a></li>
                {isAuth === true ? (
                  <Fragment>
                    {' '}
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/dashboard">Account Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/logout">Log Out</a></li>
                    </Fragment>
                ) : (
                    <Fragment>
                      {' '}
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login">Login</a></li>
                      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/signup">Sign up</a></li>
                    </Fragment>
                )}
            </ul>
        </div>
    </nav>
  );
};


export default PageWrapper;