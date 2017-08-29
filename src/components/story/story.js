import React, { Component} from 'react';
import { observer, inject } from 'mobx-react';

import Lightbox from 'react-images';

@observer
export default class Story extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div id='story' className='story'>
        <h1>Our Story</h1>
        <div className='story-text'>
          <p>Art and Nicole went to the same high school, one grade apart, but never really knew each other. In 2013, Nicole was home in SF from Boise for the holidays. Nicole along with Alyssa, her best friend from high school, showed up on a whim at a birthday party for Jesse, one of Art’s best friends from high school. After a few drinks, Alyssa and Nicole approached Art with the every popular pick up line, “Hey, didn’t we borrow your car in high school?”</p>
          <p>Art got Nicole’s phone number that night but then lost it. Thanks to an amazing save from Alyssa, Nicole and Art were inseparable for the next 5 days. Nicole left town with a plane ticket booked for a weekend visit back to SF at the end of the month. Then Art cemented their relationship by framing and mailing a picture of himself from 2nd grade for Valentine’s day. For the next year and a half, they traded visits.</p>
        </div>
        <div className="lightbox-thumbs-one">
          <a onClick={this._openLightbox}>
            <img src='../../assets/img1.jpg' id='img_0' alt='Skiing in Vail' />
          </a>
          <a onClick={this._openLightbox}>
            <img src='../../assets/img2.jpg' id='img_1' alt='Wine Tasting in Boise' />
          </a>
          <a onClick={this._openLightbox}>
            <img src='../../assets/img3.jpg' id='img_2' alt='La Trip'/>
          </a>
          <a onClick={this._openLightbox}>
            <img src='../../assets/img4.jpg' id='img_3' alt='Halloween in Boise'/>
          </a>
        </div>
        <Lightbox
          images={IMAGES}
          currentImage={this.props.store.imageIndex}
          isOpen={this.props.store.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      <div className='story-text'>
        <p>After deciding they should live together, Art was holding his breath while thinking about moving to Idaho. Luckily, Nicole landed a job back in SF and they moved in together in August 2015. The following January, on a much needed vacation to Hawaii, Art and Nicole climbed up Mauna Kea to see the most amazing sunset ever. On the way back down, Nicole let Art know “that would have been a good time to propose.” She was right.</p>
      </div>
      <div className="lightbox-thumbs-two">
        <a onClick={this._openLightbox}>
          <img src='../../assets/img5.jpg' id='img_4' alt='Hawaii Sunset' />
        </a>
        <a onClick={this._openLightbox}>
          <img src='../../assets/img6.jpg' id='img_5' alt='Hawaii, On Top of the Clouds' />
        </a>
        <a onClick={this._openLightbox}>
          <img src='../../assets/img7.jpg' id='img_5' alt='Hawaii, Ocean Cliff'/>
        </a>
      </div>
      <div className='story-text'>
        <p>Two months later, they found themselves watching a tiny heartbeat on an ultrasound. A little scared, but taking their doctor’s wise advice that people had done this in caves for tens of thousands of years, they welcomed Benji into the world in September 2016.</p>
      </div>
      <div className="lightbox-thumbs-three">
        <a onClick={this._openLightbox} className="img_3_1">
          <img src='../../assets/img8.jpg' id='img_7' alt='Benji' />
        </a>
        <a onClick={this._openLightbox} className="img_3_2">
          <img src='../../assets/img9.jpg' id='img_8' alt='The Family in Monterrey' />
        </a>
      </div>
      <div className="story-text">
        <p>Eight months later, Art, after switching to a backup location due to road closures, said Benji had a question and asked Nicole to marry him. Five minutes later, after celebrating, Nicole asked “Wait, did I remember to say yes?” She had.</p>
      </div>
      <div className="lightbox-thumbs-three">
        <a onClick={this._openLightbox}>
          <img src='../../assets/img10.jpg' id='img_9' alt='Engaged!' />
        </a>
      </div>
  </div>
    );
  }

  _openLightbox = (e) => {
    switch(e.target.id) {
      case 'img_0':
        this.props.store.imageIndex = 0;
        break;
      case 'img_1':
        this.props.store.imageIndex = 1;
        break;
      case 'img_2':
        this.props.store.imageIndex = 2;
        break;
      case 'img_3':
        this.props.store.imageIndex = 3;
        break;
      case 'img_4':
        this.props.store.imageIndex = 4;
        break;
      case 'img_5':
        this.props.store.imageIndex = 5;
        break;
      case 'img_6':
        this.props.store.imageIndex = 6;
        break;
      case 'img_7':
        this.props.store.imageIndex = 7;
        break;
      case 'img_8':
        this.props.store.imageIndex = 8;
        break;
      case 'img_9':
        this.props.store.imageIndex = 9;
        break;
    }
    this.props.store.lightboxIsOpen = true
  }

  closeLightbox = () => {
    this.props.store.lightboxIsOpen =  false;
  }

  gotoNext = () => {
    this.props.store.imageIndex = this.props.store.imageIndex + 1;
  }

  gotoPrevious = () => {
    this.props.store.imageIndex = this.props.store.imageIndex - 1;
  }
}

const IMAGES = [
  {
    src: '../../assets/img1.jpg',
    caption: 'Skining in Vail'
  },
  {
    src: '../../assets/img2.jpg',
    caption: 'Wine Tasting in Boise'
  },
  {
    src: '../../assets/img3.jpg',
    caption: 'LA Trip'
  },
  {
    src: '../../assets/img4.jpg',
    caption: 'Halloween in Boise'
  },
  {
    src: '../../assets/img5.jpg',
    caption: 'Hawaii Sunset'
  },
  {
    src: '../../assets/img6.jpg',
    caption: 'Hawaii, On Top of the Clouds'
  },
  {
    src: '../../assets/img7.jpg',
    caption: 'Hawaii, Ocean Cliff'
  },
  {
    src: '../../assets/img8.jpg',
    caption: 'Benji'
  },
  {
    src: '../../assets/img9.jpg',
    caption: 'Family in Monterrey'
  },
  {
    src: '../../assets/img10.jpg',
    caption: 'Engaged!'
  }
]
