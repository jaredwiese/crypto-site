import React, { Component } from 'react';

class ReusableButton extends Component {
  render() {
    return(
        <div className='button'>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <button type='button' className='btn-primary buttonStyle' onClick={this.props.handleClick}>
            {this.props.children}
          </button>
        </div>
    )
  }
}

export default ReusableButton;