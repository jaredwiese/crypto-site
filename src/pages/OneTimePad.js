import React, { Component } from 'react';
import { OneTimePad } from "@bpe/one-time-pad";
import { FaLock, FaLockOpen } from "react-icons/fa";
import ReusableButton from '../components/ReusableButton'


class OneTimePadCipher extends Component {

  render() {
    const handleEncrypt = () => {
      var plainText = document.getElementById('p').value
      var plainTextBuffer = Buffer.from(plainText, 'utf8')
      var pad = OneTimePad.generatePad(plainTextBuffer);
      console.log('encryptPAD', pad)
      var encryptedData = OneTimePad.encrypt(pad, plainTextBuffer);
      document.getElementById('pad').value = pad;
      document.getElementById('c').value = encryptedData;

    };

    const handleDecrypt = () => {
      var cipherText = document.getElementById('c').value
      var cipherTextArray = cipherText.split(",")
      var pad = document.getElementById('pad').value
      var padArray = pad.split(",")
      console.log('decryptPAD', pad)
      var decryptedData = OneTimePad.decrypt(padArray, cipherTextArray);
      document.getElementById('p').value = Buffer.from(decryptedData).toString('utf8');
      console.log(`Decrypted Data: ${Buffer.from(decryptedData).toString('utf8')}`);

    };

    return (
      <div className='row'>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Plain Text<br /></h3>
        <h5>
          &emsp;<textarea id="p" name="p" rows="8" cols="55" defaultValue='How long do you want these messages to remain secret? I want them to remain secret for as long as men are capable of evil.'></textarea>
        </h5>
        &emsp;&emsp;&emsp;&emsp;<h5>
          <ReusableButton handleClick={handleEncrypt}>
            Encrypt
            <FaLock /> 
          </ReusableButton>&emsp;&emsp;
          &emsp;
          <h5>
            
          <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; One Time Pad <br /></h3>
          <h5>&emsp;&emsp;&emsp;&emsp;&ensp; ( Must be the same length as the Secret Message ) <br /></h5>
          <h5>&emsp;&emsp;&emsp;&emsp;&ensp;&thinsp;&thinsp; ( Will be generated for you during encryption ) <br /></h5>
          &emsp;<textarea id="pad" name="pad" rows="8" cols="55" type="text" ></textarea>
          <br></br><br></br>
          </h5>
          <ReusableButton handleClick={handleDecrypt}>
            Decrypt 
            <FaLockOpen /> 
          </ReusableButton>
          <br></br>
        </h5>
        <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Cipher Text<br /></h3>
        <h5>
          &emsp; <textarea id="c" name="c" rows="8" cols="55" ></textarea>
        </h5>
        <br></br><br></br>
        <section className="cipher-section" id="cipher">
          <div className="cipher-section-content">
            <br></br><br></br>
            <h1 className="mb-0">
              ONE
              <span className="text-primary">TIME</span>
              PAD
            </h1>
              <p className="lead mb-5">"In cryptography, the one-time pad (OTP) is an encryption technique that cannot be cracked, but requires the use of a single-use pre-shared key that is no smaller than the message being sent. In this technique, a plaintext is paired with a random secret key (also referred to as a one-time pad). Then, each bit or character of the plaintext is encrypted by combining it with the corresponding bit or character from the pad using modular addition." <a href="https://en.wikipedia.org/wiki/One-time_pad">-Wikipedia</a>
              </p>
          </div>
        </section>
      </div>
    )
  };
};

export default OneTimePadCipher;


