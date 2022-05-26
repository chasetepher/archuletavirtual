import React from 'react';

export default function contact () {

  return (
    <div className='contact-container' id='contact-area'>
      <div className='contact-title'>
        CONTACT
      </div>
      <div className='contact-blurb'>
        We want to know what makes you tick.
      </div>
      <div className='facebook'>
        <a href='https://www.facebook.com/ArchuletaVirtual/' target="_blank">
          <img className='contact-image' src="https://i.imgur.com/4RRUVuq.jpg" alt="follow us on facebook" />
          </a>
      </div>
      <div className='instagram'>
      <a href='https://www.instagram.com/archuletavirtual/' target="_blank">
        <img className='contact-image' src="https://i.imgur.com/3k5wbqB.jpg" alt="follow us on instagram" />
        </a>
      </div>
      <div className='calendar'>
        <a href='https://calendly.com/archuletavirtual/30min?fbclid=IwAR1tCgfdbn0oIRfHbRdFz_8_SL2tnfEnqtFPiKwy97bfHV68J874EP9KCjk&month=2022-05' target="_blank">
        <img className='contact-image' src="https://i.imgur.com/es5VFfs.jpg" alt="schedule a consultation" />
        </a>
      </div>
    </div>
  )
}