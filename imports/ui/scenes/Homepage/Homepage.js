import React, { Component } from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react';

import './Homepage.scss';

@observer
export default class Homepage extends Component {
  render() {
    const home = classnames('home');
    const title = classnames('title');
    return (
      <div className={home}>
        <header className={title}>Sheng-Ji</header>
      </div>
    );
  }
}
