import React from 'react';
import Movie from './Movie/Movie';
import './App.css';
import aLotLikeLove from './a_lot_like_love_poster.jpg';
import prideAndPrejudice from './pride_and_prejudice_poster.jpg';
import aboutTime from './about_time_poster.jpg';
import whisperOfTheHeart from './whisper_of_the_heart_poster.jpg';
import whenHarryMetSally from './when_harry_met_sally_poster.jpg';
import parasite from './parasite_poster.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Movie
          img ={aLotLikeLove}
          title = "A Lot Like Love"
          alternative = "A lot like love"/>
          <Movie
          img ={prideAndPrejudice}
          title = "Price and Prejudice"
          alternative = "Pride and Prejudice"/>
          <Movie
          img ={aboutTime}
          title = "About Time"
          alternative = "About Time"/>
      </div>
      <div className="container">
        <Movie
          img ={whisperOfTheHeart}
          title = "Whisper of the Heart"
          alternative = "Whisper of the Heart"/>
          <Movie
          img ={whenHarryMetSally}
          title = "When Harry Met Sally"
          alternative = "When Harry Met Sally"/>
          <Movie
          img ={parasite}
          title = "Parasite"
          alternative = "Parasite"/>
      </div>
    </div>
  );
}

export default App;
