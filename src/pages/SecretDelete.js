import React, { Component } from 'react';
import { deleteSecretByID, fetchSecretByID } from '../api/UserAPI'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

class SecretDelete extends Component {
  state = { 
    message_name: "",
    id: this.props.match.params.secretID,
    message: ""
  }

  componentDidMount() {
    fetchSecretByID(this.state.id)
      .then(data => {
        this.setState({ 
          secret: data,
          message_name: data.message_name
        })
      });
  }

  handleDelete = async (e) => {
    e.preventDefault()

    const response = await deleteSecretByID(this.props.match.params.secretID)
    console.log(response)
    if(response.error) {
      this.setState({message: response.error.message})
    } else {
      this.setState({message: 'Secret Deleted'}, () => {
        console.log('secret deleted', this.state.message)
        window.location.replace('http://localhost:3000/dashboard');
      })
    }
  }


render() { 

  return (
    <div>
      <br></br>
      <h2>&ensp; Are you sure you want to delete {this.state.message_name}?</h2><br></br><br></br>
      {this.state.message &&
        <h3>&ensp;&ensp;{this.state.message}</h3>
      }

      {!this.state.message &&
      <Fragment>
        &ensp;&ensp;
        <Link to={`/dashboard/secrets/${this.state.id}`}>
          <button > Cancel </button>
        </Link>
        &ensp;&ensp;
        <input type="button" name="Delete" value="Delete Forever" onClick={this.handleDelete} />
      </Fragment>
      }
    </div>
  )}
};

export default SecretDelete;