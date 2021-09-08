import React, { Component } from 'react';
import { fetchSecretByID, editSecretByID } from '../api/UserAPI';
import { Link } from 'react-router-dom';

class SecretEdit extends Component {
  state = { 
    message_name: "",
    cipher_text: "",
    decrypt_key: "",
    message: ""
  }

  componentDidMount() {
    fetchSecretByID(this.props.match.params.secretID)
      .then(data => {
        console.log('SecretPage', data)
        this.setState({ 
          secret: data,
          message_name: data.message_name,
          cipher_text: data.cipher_text,
          decrypt_key: data.decrypt_key,
          message: data.message
        })
      });
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
    const response = await editSecretByID(this.props.match.params.secretID, secretObject)
    console.log(response)
    if(response.error) {
      this.setState({message: response.error.message})
    } else {
      this.setState({message: `${response.message_name} updated`})
    }
  }

  render() { 
    return (
      <div>
        <h2>&ensp; Edit {this.state.message_name}</h2><br></br><br></br>
        {this.state.message &&
          <h3>&ensp;&ensp; {this.state.message}</h3>
        }<br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          &emsp;&emsp;
          <label htmlFor={"message_name"}>MESSAGE NAME:</label><br></br>
          &emsp;&emsp;
          <input onChange={this.handleChange} type="text" name="message_name" defaultValue={this.state.message_name} /><br></br><br></br>
          &emsp;&emsp;
          <label htmlFor={"cipher_text"}>CIPHER TEXT:</label><br></br>
          &emsp;&emsp;
          <input onChange={this.handleChange} type="text" name="cipher_text" defaultValue={this.state.cipher_text} /><br></br><br></br>
          &emsp;&emsp;
          <label htmlFor={"decrypt_key"}>DECRYPTION KEY:</label><br></br>
          &emsp;&emsp;
          <input onChange={this.handleChange} type="text" name="decrypt_key"  defaultValue={this.state.decrypt_key} /><br></br><br></br>
          &emsp;&emsp;
          <input type="submit" value="Update"/><br></br>
        </form>
        <br></br><br></br>
        &emsp;&emsp;
        <Link to={`/dashboard/secrets/${this.props.match.params.secretID}`}>
          <button > Cancel </button>
        </Link>
      </div>
      );
  }
};

export default SecretEdit; 