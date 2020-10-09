import React, { useEffect } from 'react';
import './App.css';

import Home from './components/homePage/home';
import Header from './components/header/header';

const App = () => {
  const spiritedAwayImg = 'https://cdn.mos.cms.futurecdn.net/N63jckAkCjTNy3Z2aayp6C.jpg';
  const whenMarieImg = 'https://www.awn.com/sites/default/files/styles/original/public/image/attached/1024485-marnie-26.jpg?itok=olUTRouV';


  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <Home />

      <div className='pw-container'>
        <div className='pw-info-container'>
          <div className='pw-title padding-default margin-y'>
            POPULAR WORKS
          </div>

          <div className='pw-principal-work'>
            <img className='' src={spiritedAwayImg} alt='spirit awayss' />
            <div className='img-partial-overlay' />
            <div className='info-work padding-default'>
              <div className='info-work-title'>Spirited away</div>
              <div className='info-work-content'>
                lorem ipsum arium escup aras comin seraf brena stum aferum
                lorem ipsum arium escup aras comin seraf brena stum aferum
              </div>
            </div>
          </div>
        </div>

        <div className='pw-other-work padding-default margin-y'>
          <img className='' src={whenMarieImg} alt='img' />
          <div className='info-other-work margin-y'>
            <div className='info-other-work-title'>When Marie was there</div>
            <div className='info-other-work-content'>
              lorem ipsum arium escup aras comin seraf brena stum aferum
              lorem ipsum arium escup aras comin seraf brena stum aferum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
