import React, { Component } from 'react';

export default class Info extends React.Component {
  render() {
    return (
      <div className='info'>
        <h4>Registry</h4>
        <p>We don’t plan on registering anywhere and honestly do not need anything, especially given the amount of space in our cozy SF apartment.</p>
        <p>If you would still like to give us something, we are planning to honeymoon, hopefully next summer. You can use squarecash at <a href='https://cash.me/$articole' target='_blank'>cash.me/$articole</a> if you would be interested in contributing to a great trip.</p>
        <h4>Out-Of-Town Guests</h4>
        <p>If you’re coming from out of town, we’d recommend using Airbnb or VRBO to find a place to stay. Given that we’re in between Thanksgiving and the holidays, hotels may also be a good option.</p>
      </div>
    );
  }
}
