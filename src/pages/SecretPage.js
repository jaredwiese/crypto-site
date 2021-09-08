import React, { Component } from 'react';
import Secret from '../components/Secret.js'
import { fetchSecretByID } from '../api/UserAPI';

class SecretPage extends Component {
  state = {
    secret: null,
    id: this.props.match.params.secretID
  }

  componentDidMount() {
    fetchSecretByID(this.state.id)
      .then(data => {
        this.setState({ 
          secret: data
        })
      });
  }

  render() {
    return (
      <div>
        {this.state.secret ? <Secret {...this.state.secret} /> :
          <span>404: Secret Not Found</span>
        }
      </div>
    );
  }
}

export default SecretPage;