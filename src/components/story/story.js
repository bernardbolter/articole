import React, { Component} from 'react';
import { observer, inject } from 'mobx-react';

import Lightbox from 'react-images';

@observer
export default class Story extends React.Component {

  render() {
    return (
      <div id='story' className='story'>
        <div className="story-break-one">
          <div className="story-one-container">
            <h1>Our Story</h1>
            <div className='story-text'>
              <p>Art and Nicole went to the same high school, one grade apart, but never really knew each other. In 2013, Nicole was home in SF from Boise for the holidays. Nicole along with Alyssa, her best friend from high school, showed up on a whim at a birthday party for Jesse, one of Art’s best friends from high school. After a few drinks, Alyssa and Nicole approached Art with the every popular pick up line, “Hey, didn’t we borrow your car in high school?”</p>
              <p>Art got Nicole’s phone number that night but then lost it. Thanks to an amazing save from Alyssa, Nicole and Art were inseparable for the next 5 days. Nicole left town with a plane ticket booked for a weekend visit back to SF at the end of the month. Then Art cemented their relationship by framing and mailing a picture of himself from 2nd grade for Valentine’s day. For the next year and a half, they traded visits.</p>
            </div>
          </div>
          <div className="lightbox-thumbs-one">
            <a onClick={this.props.store.openLightbox}>
              <img src='http://articole.party/assets/img1.jpg' id='img_0' alt='Skiing in Vail' />
            </a>
            <a onClick={this.props.store.openLightbox}>
              <img src='http://articole.party/assets/img2.jpg' id='img_1' alt='Wine Tasting in Boise' />
            </a>
            <a onClick={this.props.store.openLightbox}>
              <img src='http://articole.party/assets/img3.jpg' id='img_2' alt='La Trip'/>
            </a>
            <a onClick={this.props.store.openLightbox}>
              <img src='http://articole.party/assets/img4.jpg' id='img_3' alt='Halloween in Boise'/>
            </a>
          </div>
        </div>
        <Lightbox
          images={this.props.store.theIMAGES.slice()}
          currentImage={this.props.store.imageIndex}
          isOpen={this.props.store.lightboxIsOpen}
          onClickPrev={this.props.store.gotoPrevious}
          onClickNext={this.props.store.gotoNext}
          onClose={this.props.store.closeLightbox}
        />

      <div className='story-break-two'>
        <div className='story-text-two'>
          <p>After deciding they should live together, Art was holding his breath while thinking about moving to Idaho. Luckily, Nicole landed a job back in SF and they moved in together in August 2015. The following January, on a much needed vacation to Hawaii, Art and Nicole climbed up Mauna Kea to see the most amazing sunset ever. On the way back down, Nicole let Art know “that would have been a good time to propose.” She was right.</p>
        </div>
        <div className="lightbox-thumbs-two">
          <a onClick={this.props.store.openLightbox}>
            <img src='http://articole.party/assets/img5.jpg' id='img_4' alt='Hawaii Sunset' />
          </a>
          <a onClick={this.props.store.openLightbox} className="story-image-hide">
            <img src='http://articole.party/assets/img6.jpg' id='img_5' alt='Hawaii, On Top of the Clouds' />
          </a>
          <a onClick={this.props.store.openLightbox}>
            <img src='http://articole.party/assets/img7.jpg' id='img_5' alt='Hawaii, Ocean Cliff'/>
          </a>
        </div>
      </div>

      <div className='story-break-three'>
        <div className='story-text-three'>
          <p>Two months later, they found themselves watching a tiny heartbeat on an ultrasound. A little scared, but taking their doctor’s wise advice that people had done this in caves for tens of thousands of years, they welcomed Benji into the world in September 2016.</p>
        </div>
        <div className="lightbox-thumbs-three">
          <a onClick={this.props.store.openLightbox} className="img_3_1">
            <img src='http://articole.party/assets/img8.jpg' id='img_7' alt='Benji' />
          </a>
          <a onClick={this.props.store.openLightbox} className="img_3_2">
            <img src='http://articole.party/assets/img9.jpg' id='img_8' alt='The Family in Monterrey' />
          </a>
        </div>
      </div>

      <div className='story-break-four'>
        <div className="story-text-four">
          <p>Eight months later, Art, after switching to a backup location due to road closures, said Benji had a question and asked Nicole to marry him. Five minutes later, after celebrating, Nicole asked “Wait, did I remember to say yes?” She had.</p>
        </div>
        <div className="lightbox-thumbs-four">
          <a onClick={this.props.store.openLightbox}>
            <img src='http://articole.party/assets/img10.jpg' id='img_9' alt='Engaged!' />
          </a>
        </div>
      </div>
  </div>
    );
  }
}
