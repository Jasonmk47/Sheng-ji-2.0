import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';

@observer
export default class Homepage extends Component {
  render() {
    const home = classnames('home');
    return <div className={home}>testing1</div>;
  }
}
