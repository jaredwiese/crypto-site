import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Secret extends Component {

  render() {
    const { secret_id, message_name, cipher_text, decrypt_key } = this.props;

    return (
      <div>
        <br></br><br></br><br></br>
        <h2>&ensp;{ message_name }</h2>
        <br></br>
        <h4>&emsp;{ cipher_text }</h4>
        <br></br>
        <h4>&emsp;{ decrypt_key }</h4>
        <br></br>
        <h5>&emsp;<Link to={`/dashboard/secrets/${secret_id}/edit`}>Edit</Link> &emsp;&emsp; <Link to={`/dashboard/secrets/${secret_id}/delete`}>   Delete   </Link></h5>
        
      </div>
    )
  }
}

export default Secret;