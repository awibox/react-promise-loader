import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultLoaderStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  background: 'rgba(255,255,255,.5)',
  backfaceVisibility: 'hidden',
};

const defaultSpinnerStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 100,
  height: 100,
};

class Loader extends Component {
  static propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool,
    background: PropTypes.string,
  };

  static defaultProps = {
    color: '#000',
    loading: false,
    background: 'rgba(255,255,255,.5)',
  };

  render() {
    const loaderStyle = {
      ...defaultLoaderStyle,
      background: this.props.background,
    };
    const spinnerItemsArray = [
      { transform: 'rotate(0 50 50)', begin: '-0.9166666666666666s' },
      { transform: 'rotate(30 50 50)', begin: '-0.8333333333333334s' },
      { transform: 'rotate(60 50 50)', begin: '-0.75s' },
      { transform: 'rotate(90 50 50)', begin: '-0.6666666666666666s' },
      { transform: 'rotate(120 50 50)', begin: '-0.5833333333333334s' },
      { transform: 'rotate(150 50 50)', begin: '-0.5s' },
      { transform: 'rotate(180 50 50)', begin: '-0.4166666666666667s' },
      { transform: 'rotate(210 50 50)', begin: '-0.3333333333333333s' },
      { transform: 'rotate(240 50 50)', begin: '-0.25s' },
      { transform: 'rotate(270 50 50)', begin: '-0.16666666666666666s' },
      { transform: 'rotate(300 50 50)', begin: '-0.08333333333333333s' },
      { transform: 'rotate(330 50 50)', begin: '0s' },
    ];
    return (
      this.props.loading
      && <div style={loaderStyle}>
        <div style={defaultSpinnerStyle}>
          <svg className="lds-spinner" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            {spinnerItemsArray.map((item) => <g key={item.transform} transform={item.transform}>
              <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill={this.props.color}>
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin={item.begin} repeatCount="indefinite"/>
              </rect>
            </g>)}
          </svg>
        </div>
      </div>
    );
  }
}

export default Loader;
