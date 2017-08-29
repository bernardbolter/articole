import React, { Component } from 'react';

import Nav from './nav';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Nav />
        <h1>Nicole <span>and</span> Art</h1>
        <h2>are getting married</h2>
        <p>We enthusiastically invite you to join us in celebrating our marriage.</p>
        <p>Each of you are an important part of our world and we sincerely hope you can make it.</p>
        <p>Plus, who doesn’t love a good party?</p>
      </div>
    );
  }
}
