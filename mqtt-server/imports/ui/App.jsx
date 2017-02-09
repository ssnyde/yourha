import React, { Component } from 'react';

import Msg from './Msg.jsx';

// App component - represents the whole app
export default class App extends Component {
  getMsgs() {
    return [
      { _id: 1, text: 'This is messsage 1' },
      { _id: 2, text: 'This is message 2' },
      { _id: 3, text: 'This is message 3' },
    ];
  }
  
  renderMsgs() {
    return this.getMsgs().map((msg) => (
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
