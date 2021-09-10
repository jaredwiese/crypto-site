import React, { Component } from 'react';
import CipherJS from "cipherjs";
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'


class SubstitutionCipher extends Component {

  render() {
    const handleEncrypt = () => {
      var plaintext = document.getElementById('p').value
      var key = document.getElementById('s').value
      document.getElementById('c').value = CipherJS.Substitution.encrypt(plaintext, key);
    };

    const handleDecrypt = () => {
      var ciphertext = document.getElementById('c').value
      var key = document.getElementById('s').value
      document.getElementById('p').value = CipherJS.Substitution.decrypt(ciphertext, key);
    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Plain Text<br /></h3>
        <h5>
          &emsp;  <textarea id="p" name="p" rows="4" cols="50" defaultValue='Anyone can create an algorithm they can’t break.'></textarea>
        </h5>
        &emsp;&emsp;&emsp;&emsp;&emsp;<h5>
          <ReusableButton handleClick={handleEncrypt}>
            Encrypt
            <FaLock /> 
          </ReusableButton>&emsp;&emsp;
          &emsp; 
          <h5>
          &emsp;&emsp;&emsp;&emsp; key = <input id="s" name="key" size="25" defaultValue='ZEBRASCDFGHIJKLMNOPQTUVWXY' type="text" />
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
              SIMPLE
              <span className="text-primary">SUBSTITUTION</span>
              CIPHER
            </h1>
              <p className="lead mb-5">"In cryptography, a substitution cipher is a method of encrypting in which units of plaintext are replaced with the ciphertext, in a defined manner, with the help of a key; the "units" may be single letters (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth. The receiver deciphers the text by performing the inverse substitution process to extract the original message." <a href="https://en.wikipedia.org/wiki/Vigenère_cipher">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default SubstitutionCipher;


