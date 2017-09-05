import React, { Component } from 'react';

import Nav from './nav';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Nav />
        <div className="header-break">
          <div className="header-top-text">
            <h1>Nicole <span>and</span> Art</h1>
            <h2>celebrate their wedding</h2>
            <h3>Saturday &#183; December 2 &#183; 2017</h3>
            <p>We are getting married on December 1<sup>st</sup> in a private ceremony with immediate family.</p>
            <p>We enthusiastically invite you to join us in celebrating our marriage the following evening.</p>
            <p>Each of you are an important part of our world and we sincerely hope you can make it.</p>
            <p>Plus, who doesn’t love a good party?</p>
          </div>
          <div className="header-images">
            <div className="header-gradient"></div>
            <img src="http://articole.party/assets/header.jpg" alt="Nicole and Art in Big Sur" />
          </div>
        </div>
      </div>
    );
  }
}
