import React, { Component} from 'react';

export default class Details extends React.Component {
  render() {
    return (
      <div id='details' className='details'>
        <h1>The Celebration</h1>
        <h2>Saturday, December 2nd</h2>
        <h3>6:00-11:00pm</h3>
        <h2>Potrero Hill Neighborhood House</h2>
        <a href="https://www.phnhsf.org" target="_blank">(www.phnhsf.org)</a>
        <h2>953 DeHaro St.</h2>
        <h3>San Francisco, CA 94107</h3>
        <p>The agenda includes food <a className="p_links" href="http://www.elsursf.com/" target="_blank">(El Sur)</a>, drinks, and music <a className="p_links" href="http://www.soulatomic.com/" target="_blank">(Soul Atomic)</a>.  Dancing is encouraged/mandatory.</p>
        <p>We’ll be wearing a suit and a dress so feel free to take your attire cues from that (or not).</p>
        <p>We love your kids (and our own) but please make other plans for them on this occasion.</p>
        <p>Street parking is the only option if you plan on driving. We recommend Lyft or a taxi to maximize your enjoyment.</p>
      </div>
    );
  }
}
