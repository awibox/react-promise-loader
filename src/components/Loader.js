import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Loader.scss';

class Loader extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Hello world',
  };

  render() {
    return (
      <div className={styles.text}>
        {this.props.text}
      </div>
    );
  }
}

export default Loader;
