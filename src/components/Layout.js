import React from 'react';

import Header from './header/header';

import { storeData } from '../store';

import Details from './details/details';
import Story from './story/story';
import Map from './map/map';
import RSVP from './rsvp/rsvp';
import Info from './info/info';
import Footer from './footer/footer';

export default class Layout extends React.Component {

  render() {
    console.log(storeData);
    return (
      <div className="container">
        <Header />
        <Story store = { storeData } />
        <div className='details-break'>
          <Details />
          <Map />
        </div>
        <div className='rsvp-break'>
          <RSVP store = { storeData } />
          <Info />
        </div>
        <Footer />
      </div>
    );
  }
}
