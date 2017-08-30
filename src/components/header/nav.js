import React, { Component } from 'react';

import jump from 'jump.js';

export default class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <a onClick={this._jumpTo} id='story-link'>Our Story</a>
        <a onClick={this._jumpTo} id='details-link'>The Celebration</a>
        <a onClick={this._jumpTo} id='rsvp-link'>RSVP</a>
      </div>
    );
  }

  _jumpTo = (e) => {
    switch (e.target.id) {
      case 'details-link':
        jump('#details', {
          offset: -62
        });
        break;
      case 'story-link':
        jump('#story', {
          offset: -30
        });
        break;
      case 'rsvp-link':
        jump('#rsvp', {
          offset: -30
        });
        break;
    }
  }
}
