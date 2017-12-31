import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';

@observer
export default class Gameboard extends Component {
  render() {
    const board = classnames('board');
    return <div className={board}>testing2</div>;
  }
}
