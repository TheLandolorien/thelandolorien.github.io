import React from 'react';

import './app.css';

import logo from './assets/logos/tlw-motto-transparent_blue.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="app" role="main">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="The Lando Way Logo with Motto" />
          <p>A playbook to tackle problems @home and @work.</p>
        </header>
      </div>
    );
  }
}
