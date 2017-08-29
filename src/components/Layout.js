import React from 'react';

import Header from './header/header';

import Details from './details/details';
import Story from './story/story';
import Map from './map/map';
import RSVP from './rsvp/rsvp';
import Footer from './footer/footer';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Details />
        <Story />
        <Map />
        <RSVP />
        <Footer />
      </div>
    );
  }
}
