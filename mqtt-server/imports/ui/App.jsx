import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Msgs } from '../api/msgs.js';

import Msg from './Msg.jsx';

// App component - represents the whole app
class App extends Component {
  renderMsgs() {
    return this.props.msgs.map((msg) => (
      <Msg key={msg._id} msg={msg} />
    ));
  }
  
  render() {
    return (
      <div className="container">
      <header>
      <h1>MQTT Message Log</h1>
      </header>
      
      <ul>
      {this.renderMsgs()}
      </ul>
      </div>
    );
  }
}

App.propTypes = {
  msgs: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    msgs: Msgs.find({}).fetch(),
  };
}, App);
  
