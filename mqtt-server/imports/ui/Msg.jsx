import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Msg extends Component {
  render() {
    return (
      <li>{this.props.msg.text}</li>
    );
  }
}

Msg.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  msg: PropTypes.object.isRequired,
};
