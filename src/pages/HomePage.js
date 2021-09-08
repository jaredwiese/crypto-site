import React, { Fragment } from 'react';

const HomePage = () => {
  
  return (
    <div>

        <Fragment>
          <section className="resume-section" id="about">
              <div className="resume-section-content">
                  <h1 className="mb-0">
                      CRYPTO
                      <span className="text-primary">GRAPHY</span>
                  </h1>
                  <p className="lead mb-5">"Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages; various aspects in information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography." <a href="https://en.wikipedia.org/wiki/Cryptography">-Wikipedia</a>
                  </p>
                  
                  <div className="social-icons">
                      <a className="social-icon" href="https://www.linkedin.com/in/jaredwiese/"><i className="fab fa-linkedin-in"></i></a>
                      <a className="social-icon" href="https://github.com/jaredwiese"><i className="fab fa-github"></i></a>
                  </div>
              </div>
          </section>
          <hr className="m-0" />
          
        </Fragment>

    </div>
  );
};

export default HomePage;