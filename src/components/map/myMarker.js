import React, {Component} from 'react';

export default class MyMarker extends React.Component {
  render() {
    return (
      <div className='marker'>
        <a href='https://www.google.com/maps/place/Potrero+Hill+Neighborhood+House/@37.7582753,-122.4006918,15z/data=!4m5!3m4!1s0x0:0x393a7eca2a0bf708!8m2!3d37.7582753!4d-122.4006918' target='_blank'>
          <img src='../../assets/icon-map-address.png' />
        </a>
      </div>
    )
  }
}
