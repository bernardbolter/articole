import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Lightbox from 'react-images';

@observer
export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <Lightbox
          images={this.props.store.theIMAGES.slice()}
          currentImage={this.props.store.imageIndex}
          isOpen={this.props.store.lightboxIsOpen}
          onClickPrev={this.props.store.gotoPrevious}
          onClickNext={this.props.store.gotoNext}
          onClose={this.props.store.closeLightbox}
        />
      <div className="footer-thumbs">
        <a onClick={this.props.store.openLightbox}>
          <img src='http://articole.party/assets/img11.jpg' id='img_10' alt='Boise---Bike-in-Wine-Country' />
        </a>
        <a onClick={this.props.store.openLightbox}>
          <img src='http://articole.party/assets/img12.jpg' id='img_11' alt='Family in Cape Cod' />
        </a>
        <a onClick={this.props.store.openLightbox}>
          <img src='http://articole.party/assets/img13.jpg' id='img_12' alt='Getting the Christmas Tree' />
        </a>
        <a onClick={this.props.store.openLightbox}>
          <img src='http://articole.party/assets/img14.jpg' id='img_13' alt='Warriors Family' />
        </a>
      </div>
      </div>
    );
  }
}
