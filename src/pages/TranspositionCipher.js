import React, { Component } from 'react';
import { Cipher } from 'js-ktc';
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'


class TranspositionCipher extends Component {

  render() {
    const handleEncrypt = () => {
      var plaintext = document.getElementById('p').value
      var key = document.getElementById('s').value
      var ktc = new Cipher(key)
      document.getElementById('c').value = ktc.encrypt(plaintext);
    };

    const handleDecrypt = () => {
      var ciphertext = document.getElementById('c').value
      var key = document.getElementById('s').value
      var ktc = new Cipher(key)
      var plaintext = ktc.decrypt(ciphertext)
      document.getElementById('p').value = plaintext.split(" ").join("");
    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Plain Text<br /></h3>
        <h5>
          &emsp;  <textarea id="p" name="p" rows="4" cols="50" defaultValue='One must acknowledge with cryptography no amount of violence will ever solve a math problem.'></textarea>
        </h5>
        &emsp;&emsp;&emsp;&emsp;&emsp;<h5>
          <ReusableButton handleClick={handleEncrypt}>
            Encrypt
            <FaLock /> 
          </ReusableButton>&emsp;&emsp;
          &emsp; 
          <h5>
          &emsp;&emsp;&emsp;&emsp; key = <input id="s" name="key" size="25" defaultValue='key' type="text" />
          <br></br><br></br>
          </h5>
          <ReusableButton handleClick={handleDecrypt}>
            Decrypt 
            <FaLockOpen /> 
          </ReusableButton>
          <br></br>
        </h5>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Cipher Text<br /></h3>
        <h5>
          &emsp; <textarea id="c" name="c" rows="4" cols="50" ></textarea>
        </h5>
        <br></br><br></br>
        <section className="cipher-section" id="cipher">
          <div className="cipher-section-content">
            <br></br><br></br>
            <h1 className="mb-0">
              Transposition
              <span className="text-primary">CIPHER</span>
            </h1>
              <p className="lead mb-5">"In cryptography, a transposition cipher is a method of encryption by which the positions held by units of plaintext (which are commonly characters or groups of characters) are shifted according to a regular system, so that the ciphertext constitutes a permutation of the plaintext. That is, the order of the units is changed (the plaintext is reordered)." <a href="https://en.wikipedia.org/wiki/Transposition_cipher">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default TranspositionCipher;
