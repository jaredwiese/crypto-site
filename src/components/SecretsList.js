import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SecretMessages from './SecretMessages';

class SecretsList extends Component {
  render() {
    const { secrets } = this.props;
    return (
      <ListGroup>
        { secrets.map((secret) => (
          <ListGroupItem key={ secret.secret_id }>
            <SecretMessages { ...secret } id={ secret.secret_id  } />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default SecretsList;