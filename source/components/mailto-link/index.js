import React from 'react';
import PropTypes from 'prop-types';

function encode(string) {
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return window.btoa(string);
  }

  return string;
}

function decode(encodedString) {
  if (typeof window !== 'undefined' && typeof window.atob === 'function') {
    const decodedHref = window.atob(encodedString);
    const larr = decodedHref.split('#')[1].split('|');
    const darr = larr[1].split('%');

    return `mailto:${larr[0]}@${darr[0]}.${darr[1]}`;
  }

  return encodedString;
}

export class MailtoLink extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.node,
  };

  static defaultProps = {
    element: 'a',
  };

  isDecoded = false;

  handleClick = (event) => {
    if (this.isDecoded) {
      return;
    }

    event.target.href = decode(event.target.getAttribute('href').slice(1));
    this.isDecoded = true;
  };

  render() {
    const { href, children, element, ...restProps } = this.props;

    return React.createElement(
      element,
      {
        ...restProps,
        href: this.isDecoded ? href : `#${encode(href)}`,
        onClick: this.handleClick,
      },
      children,
    );
  }
}
