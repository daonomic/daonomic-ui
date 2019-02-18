import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}
