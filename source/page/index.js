import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: var(--color-page-bg);
`;

const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  static Header = styled.header`
    flex-grow: 0;
    flex-shrink: 0;
  `;

  static Footer = styled.footer`
    flex-grow: 0;
    flex-shrink: 0;
  `;

  static Content = styled.main`
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
  `;

  render = () => {
    const { children, ...restProps } = this.props;

    return (
      <PageRoot {...restProps}>
        <PageInner>
          {children}
        </PageInner>
      </PageRoot>
    );
  };
}
