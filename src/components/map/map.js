import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import MyMarker from './myMarker.js';
import mapStyles from './map_styles.json';

export default class Map extends React.Component {
  static defaultProps = {
    center: [37.758275, -122.400692],
    zoom: 12,
  };
  constructor(props){
    super(props);
  }

  render() {
    const defaultOptions = {
      styles: mapStyles,
      mapTypeId: 'roadmap',
      zoomControl: false
    };
    return (
      <div className='map'>
        <GoogleMap
          defaultCenter={this.props.center}
          zoom={this.props.zoom}
          options={defaultOptions}
        >
        <MyMarker lat={37.758275} lng={-122.400692} />
        </GoogleMap>
      </div>
    );
  }
}
