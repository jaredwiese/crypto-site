import React, { Component } from 'react';
import { addSecret } from '../api/UserAPI';


class SecretAdd extends Component {
  state = { 
    message_name: "",
    cipher_text: "",
    decrypt_key: "",
    message: ""
  }

  handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    if(field === "message_name") {
      this.setState({message_name: value})
    } else if (field === "cipher_text") {
      this.setState({cipher_text: value})
    } else {
      this.setState({decrypt_key: value})
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const secretObject = {
      message_name: this.state.message_name,
      cipher_text: this.state.cipher_text,
      decrypt_key: this.state.decrypt_key
    }
    const response = await addSecret(secretObject)
    console.log(response)
    if(response.error) {
      this.setState({message: response.error.message})
    } else {
      this.setState({message: `${response.message_name} submitted`})
    }
  }

  render() { 
    return (
      <div>
        <h2>&ensp;Add New Secret Message</h2><br></br><br></br>
        {this.state.message &&
          <h3>&ensp;&ensp;{this.state.message}</h3>
        }<br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          &ensp;&ensp;<label htmlFor={"message_name"}>MESSAGE NAME:</label><br></br>
          &ensp;&ensp;<input onChange={this.handleChange} type="text" name="message_name" value={this.state.message_name} /><br></br><br></br>
          &ensp;&ensp;<label htmlFor={"cipher_text"}>CIPHER TEXT:</label><br></br>
          &ensp;&ensp;<input onChange={this.handleChange} type="text" name="cipher_text" value={this.state.cipher_text} /><br></br><br></br>
          &ensp;&ensp;<label htmlFor={"decrypt_key"}>DECRYPTION KEY:</label><br></br>
          &ensp;&ensp;<input onChange={this.handleChange} type="text" name="decrypt_key" value={this.state.decrypt_key} /><br></br><br></br>
          &ensp;&ensp;<input type="submit" value="Submit"/><br></br>
        </form>
      </div>
      );
  }
};

export default SecretAdd; 