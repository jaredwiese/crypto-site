import React, { Component } from 'react';
import CipherJS from "cipherjs";
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'


class VigenereCipher extends Component {

  render() {
    const handleEncrypt = () => {
      var plaintext = document.getElementById('p').value
      var key = document.getElementById('s').value
      document.getElementById('c').value = CipherJS.Vigenere.encrypt(plaintext, key);
    };

    const handleDecrypt = () => {
      var ciphertext = document.getElementById('c').value
      var key = document.getElementById('s').value
      document.getElementById('p').value = CipherJS.Vigenere.decrypt(ciphertext, key);
    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Plain Text<br /></h3>
        <h5>
          &emsp;  <textarea id="p" name="p" rows="4" cols="50" defaultValue='I should be able to whisper something in your ear, even if your ear is 1000 miles away, and the government disagrees with that.'></textarea>
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
              Vigenère
              <span className="text-primary">CIPHER</span>
            </h1>
              <p className="lead mb-5">"The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. It employs a form of polyalphabetic substitution." <a href="https://en.wikipedia.org/wiki/Vigenère_cipher">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default VigenereCipher;


