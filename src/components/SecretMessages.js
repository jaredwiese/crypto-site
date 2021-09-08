import React, { Component } from 'react';
import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchUser } from '../api/UserAPI';

class SecretMessages extends Component {
  state = {
    secrets: []
  }

  componentDidMount() {
    fetchUser()
      .then(data => {
        this.setState({
          secrets: Array.from(data)
        })
      });
  }

  render() {
    const { secret_id, message_name, cipher_text, decrypt_key } = this.props;
    return (
      <div>
        <ListGroupItemHeading>
          <Link to={`/dashboard/secrets/${secret_id}`}>{ message_name }</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>{ cipher_text }</ListGroupItemText>
        <ListGroupItemText>{ decrypt_key }</ListGroupItemText>
      </div>
    )
  }
}

export default SecretMessages;