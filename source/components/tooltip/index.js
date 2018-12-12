import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Portal from '../portal';
import positions from './position';
import styles from './styles.css';

const stopEventPropagation = (event) => event.stopPropagation();

class Tooltip extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    tagName: PropTypes.string,
    direction: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.node.isRequired,
    styles: PropTypes.object,
    eventOff: PropTypes.string,
    eventOn: PropTypes.string,
    eventToggle: PropTypes.string,
    isOpen: PropTypes.bool,
    hoverDelay: PropTypes.number,
    allowTipContentHover: PropTypes.bool,
    arrow: PropTypes.bool,
  };

  static defaultProps = {
    tagName: 'div',
    direction: 'up',
    className: '',
    styles: {},
    hoverDelay: 0,
    allowTipContentHover: false,
    arrow: true,
  };

  constructor() {
    super();

    this.state = { showTip: false, hasHover: false, ignoreShow: false };

    this.showTip = this.showTip.bind(this);
    this.hideTip = this.hideTip.bind(this);
    this.checkHover = this.checkHover.bind(this);
    this.toggleTip = this.toggleTip.bind(this);
    this.startHover = this.startHover.bind(this);
    this.endHover = this.endHover.bind(this);
  }

  componentDidMount() {
    // if the isOpen prop is passed on first render we need to immediately trigger a second render,
    // because the tip ref is needed to calculate the position
    if (this.props.isOpen) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ isOpen: true });
    }
  }

  toggleTip() {
    this.setState({ showTip: !this.state.showTip });
  }

  showTip() {
    this.setState({ showTip: true });
  }

  hideTip() {
    this.setState({ hasHover: false });
    this.setState({ showTip: false });
  }

  startHover() {
    if (!this.state.ignoreShow) {
      this.setState({ hasHover: true });

      setTimeout(this.checkHover, this.props.hoverDelay);
    }
  }

  endHover() {
    this.setState({ hasHover: false });

    setTimeout(this.checkHover, this.props.hoverDelay);
  }

  checkHover() {
    this.setState({ showTip: this.state.hasHover });
  }

  render() {
    const {
      direction,
      className,
      children,
      content,
      eventOn,
      eventOff,
      eventToggle,
      isOpen,
      allowTipContentHover,
      arrow,
    } = this.props;

    const showTip = typeof isOpen === 'undefined' ? this.state.showTip : isOpen;
    const currentPositions = positions(
      direction,
      this.tip,
      this.target,
      { ...this.state, showTip },
      { arrow },
    );

    const wrapperStyles = {
      position: 'relative',
      ...this.props.styles,
    };

    const props = {
      style: wrapperStyles,
      ref: (target) => {
        this.target = target;
      },
      className,
    };

    const tipWrapperProps = {
      // keep clicks on the tip from closing click controlled tips
      onClick: stopEventPropagation,
    };

    // event handling
    if (eventOff) {
      props[eventOff] = this.hideTip;
    }

    if (eventOn) {
      props[eventOn] = this.showTip;
    }

    if (eventToggle) {
      props[eventToggle] = this.toggleTip;
    } else {
      props.onMouseEnter = this.startHover;
      props.onMouseLeave = allowTipContentHover ? this.endHover : this.hideTip;
      props.onTouchStart = this.toggleTip;

      if (allowTipContentHover) {
        tipWrapperProps.onMouseEnter = this.startHover;
        tipWrapperProps.onMouseLeave = this.endHover;
        tipWrapperProps.onTouchStart = stopEventPropagation;
      } else {
        tipWrapperProps.onMouseEnter = this.hideTip;
      }
    }

    return (
      <this.props.tagName {...props} className={cn(className, styles.root)}>
        {children}

        <Portal>
          <div {...tipWrapperProps}>
            <span
              className={styles.tooltip}
              style={{ ...currentPositions.tip }}
              ref={(tip) => {
                this.tip = tip;
              }}
            >
              {content}
            </span>

            <span
              className={cn(
                styles.arrow,
                styles[`arrow_${currentPositions.realDirection}`],
              )}
              style={{ ...currentPositions.arrow }}
            />
          </div>
        </Portal>
      </this.props.tagName>
    );
  }
}

export default Tooltip;
