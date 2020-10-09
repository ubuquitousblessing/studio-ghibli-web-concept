import React from 'react';

import './weareghibli.css'

const WeAreGhibli = () => {
  const urlImg = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2019%2F12%2Fhtra243_vv177.jpg';

  return (
    <div className='principal-container'>
      <img className='principalImg' src={urlImg} alt='spirit away' />
      <div className='img-overlay'></div>
      <div className='ghibli-tag'>
        <h1>
          WE ARE
            <p>GHIBLI</p>
        </h1>
      </div>
    </div>
  );
}

export default WeAreGhibli;