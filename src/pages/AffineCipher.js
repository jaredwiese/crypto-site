import React, { Component } from 'react';
import CipherJS from "cipherjs";
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'


class AffineCipher extends Component {

  render() {
    const handleEncrypt = () => {
      var plaintext = document.getElementById('p').value
      var keyA = Number(document.getElementById('sa').value)
      var keyB = Number(document.getElementById('sb').value)
      document.getElementById('c').value = CipherJS.Affine.encrypt(plaintext, keyA, keyB);
    };

    const handleDecrypt = () => {
      var ciphertext = document.getElementById('c').value
      var keyA = Number(document.getElementById('sa').value)
      var keyB = Number(document.getElementById('sb').value)
      document.getElementById('p').value = CipherJS.Affine.decrypt(ciphertext, keyA, keyB);
    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp; Plain Text<br /></h3>
        <h5>
          &emsp;  <textarea id="p" name="p" rows="4" cols="50" defaultValue='Security is a process, not a product.'></textarea>
        </h5>
        &emsp;&emsp;&emsp;&emsp;&emsp;<h5>
          <ReusableButton handleClick={handleEncrypt}>
            Encrypt
            <FaLock /> 
          </ReusableButton>&emsp;&emsp;
          &emsp; 
          <h5>
          &emsp;&emsp;&emsp;&emsp; KEY A (Coprime of 26) = <input id="sa" name="keyA" size="10" defaultValue='5' type="text" />
          <br></br><br></br>
          &emsp;&emsp;&emsp;&emsp; KEY B (Between 0-25) = <input id="sb" name="keyB" size="10" defaultValue='23' type="text" />
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
              AFFINE
              <span className="text-primary">CIPHER</span>
            </h1>
              <p className="lead mb-5">"The affine cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. The formula used means that each letter encrypts to one other letter, and back again, meaning the cipher is essentially a standard substitution cipher with a rule governing which letter goes to which. " <a href="https://en.wikipedia.org/wiki/Affine_cipher">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default AffineCipher;
