import React, { Component } from 'react';
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'

class CaesarCipher extends Component {

  encrypt(plaintext, shift) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let cipherString = '';
    let currentIndex = 0;
    let cipherIndex = 0;

    for (let char = 0; char < plaintext.length; char++) {
      if (upper.includes(plaintext[char]) && (upper.indexOf(plaintext[char]) + shift < 26)) {
        currentIndex = upper.indexOf(plaintext[char])
        cipherIndex = currentIndex + shift
        cipherString += upper[cipherIndex]
      } else if (upper.includes(plaintext[char]) && (upper.indexOf(plaintext[char]) + shift >= 26)) {
        currentIndex = upper.indexOf(plaintext[char])
        cipherIndex = (currentIndex + shift) - 26
        cipherString += upper[cipherIndex]
      } else if (lower.includes(plaintext[char]) && (lower.indexOf(plaintext[char]) + shift < 26)) {
        currentIndex = lower.indexOf(plaintext[char])
        cipherIndex = currentIndex + shift
        cipherString += lower[cipherIndex]
      } else if (lower.includes(plaintext[char]) && (lower.indexOf(plaintext[char]) + shift >= 26)) {
        currentIndex = lower.indexOf(plaintext[char])
        cipherIndex = (currentIndex + shift) - 26
        cipherString += lower[cipherIndex]
      } else {
        (cipherString += plaintext[char])
      }
    };
    return cipherString; 
  };

  decrypt(ciphertext, shift) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let plainTextString = '';
    let currentIndex = 0;
    let plainTextIndex = 0;

    for (let char = 0; char < ciphertext.length; char++) {
      console.log('a', lower.indexOf('a'))
      console.log('shift', shift)
      console.log('index', lower.indexOf(ciphertext[char]))
      if (upper.includes(ciphertext[char]) && (upper.indexOf(ciphertext[char]) + shift > -1)) {
        currentIndex = upper.indexOf(ciphertext[char])
        plainTextIndex = currentIndex + shift
        plainTextString += upper[plainTextIndex]
      } else if (upper.includes(ciphertext[char]) && (upper.indexOf(ciphertext[char]) + shift <= -1)) {
        currentIndex = upper.indexOf(ciphertext[char])
        plainTextIndex = (currentIndex + shift) + 26
        plainTextString += upper[plainTextIndex]
      } else if (lower.includes(ciphertext[char]) && (lower.indexOf(ciphertext[char]) + shift > -1)) {
        currentIndex = lower.indexOf(ciphertext[char])
        plainTextIndex = currentIndex + shift
        plainTextString += lower[plainTextIndex]
      } else if (lower.includes(ciphertext[char]) && (lower.indexOf(ciphertext[char]) + shift <= -1)) {
        currentIndex = lower.indexOf(ciphertext[char])
        plainTextIndex = (currentIndex + shift) + 26
        plainTextString += lower[plainTextIndex]
      } else {
        (plainTextString += ciphertext[char])
      }
    };
    return plainTextString; 
  };

  render() {
    const handleEncrypt = () => {
      var plaintext = document.getElementById('p').value
      var shift = Number(document.getElementById('s').value)
      document.getElementById('c').value = this.encrypt(plaintext, shift);
    };

    const handleDecrypt = () => {
      var ciphertext = document.getElementById('c').value
      var shift = -Number(document.getElementById('s').value)
      document.getElementById('p').value = this.decrypt(ciphertext, shift);
      console.log(shift)
    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Plain Text<br /></h3>
        <h5>
          &emsp;  <textarea id="p" name="p" rows="4" cols="50" defaultValue='attack at dawn'></textarea>
        </h5>
        &emsp;&emsp;&emsp;&emsp;&emsp;<h5>
          <ReusableButton handleClick={handleEncrypt}>
            Encrypt
            <FaLock /> 
          </ReusableButton>&emsp;&emsp;
          &emsp; 
          <h5>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; shift = <input id="s" name="key" size="10" defaultValue='13' type="text" />
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
              CAESAR
              <span className="text-primary">CIPHER</span>
            </h1>
              <p className="lead mb-5">"In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence." <a href="https://en.wikipedia.org/wiki/Caesar_cipher">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default CaesarCipher;