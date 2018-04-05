import React, { Component } from 'react';

class Currency extends Component {

  componentWillMount(){
    console.log(this.props.params);
  }

  render(){
    return (
      <div>
        <h3>
          This is Currency Page !
        </h3>
      </div>
    );
  }
}

export default Currency;
