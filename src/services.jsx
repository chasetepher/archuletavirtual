import React from 'react';

export default function services () {
  return (
    <div className='services'>
      <div className='services-desc-1'>
        SERVICES
      </div>
      <div className='services-desc-2'>
        Our purpose is to share yours. What can we help you achieve?
      </div>
      <div className='pod-mgmt'>
        <img className='service-image' src="https://i.imgur.com/h3kpNCx.jpg" alt="Podcasts" />
        <div className='service-type'>Podcast Mgmt</div>
        <div className='service-blurb'>Do you have a podcast?<br/> We can manage it.</div>
      </div>
      <div className='videos'>
      <img className='service-image' src="https://i.imgur.com/pm4JpKz.jpg" alt="Videos" />
        <div className='service-type'>Video Mgmt</div>
        <div className='service-blurb'>Do you have videos?<br/> We can manage them.</div>
      </div>
      <div className='custom'>
      <img className='service-image' src="https://i.imgur.com/J2vo5JF.jpg" alt="Custom" />
        <div className='service-type'>Custom Projects</div>
        <div className='service-blurb'>Do you have socials?<br/> We can manage them.</div>
      </div>
    </div>
  )
}