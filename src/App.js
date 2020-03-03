import React from 'react';
import './App.css';
import aLotLikeLove from './a_lot_like_love_poster.jpg';
import prideAndPrejudice from './pride_and_prejudice_poster.jpg';
import aboutTime from './about_time_poster.jpg';
import whisperOfTheHeart from './whisper_of_the_heart_poster.jpg';
import whenHarryMetSally from './when_harry_met_sally_poster.jpg';
import parasite from './parasite_poster.jpg';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='movie'>
          <img src={aLotLikeLove} className='item' alt='A Lot Like Love' />
          <div className='title'>
            <h2>A Lot Like Love</h2>
          </div>
        </div>
        <div className='movie'>
          <img src={prideAndPrejudice} className='item' alt='Pride and Prejudice' />
          <div className='title'>
            <h2>Pride and Prejudice</h2>
          </div>
        </div>
        <div className='movie'>
          <img src={aboutTime} className='item' alt='About Time' />
          <div className='title'>
            <h2>About Time</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='movie'>
          <img src={whisperOfTheHeart} className='item' alt='Whisper of the Heart' />
          <div className='title'>
            <h2>Whisper of the Heart</h2>
          </div>
        </div>
        <div className='movie'>
          <img src={whenHarryMetSally} className='item' alt='When Harry Met Sally' />
          <div className='title'>
            <h2>When Harry Met Sally</h2>
          </div>
        </div>
        <div className='movie'>
          <img src={parasite} className='item' alt='Parasite' />
          <div className='title'>
            <h2>Parasite</h2>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
