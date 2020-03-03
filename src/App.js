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
    <div className = 'App'>
      <div className = 'container'>
        <h1 className = 'movie_title'>
          <img src = {aLotLikeLove} alt = 'A Lot Like Love'/>
        </h1>
        <h1 className = 'movie_title'>
          <img src = {prideAndPrejudice} alt = 'Pride and Prejudice'/>
        </h1>
        <h1 className ='movie_title'>
          <img src = {aboutTime} alt = 'About Time'/>
        </h1>
      </div>
      <div className ='container'>
        <h1 className = 'movie_title'>
          <img src = {whisperOfTheHeart} alt ='Whisper of the Heart'/>
        </h1>
        <h1 className = 'movie_title'>
          <img src = {whenHarryMetSally} alt = 'When Harry Met Sally'/>
        </h1>
        <h1 className = 'movie_title'>
          <img src = {parasite} alt ='Parasite'/>
        </h1>
      </div>
    </div>

  );
}

export default App;
