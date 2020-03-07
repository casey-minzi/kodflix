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
          image={aLotLikeLove}
          title="A Lot Like Love"
        />
        <Movie
          image={prideAndPrejudice}
          title="Pride and Prejudice"
        />
        <Movie
          image={aboutTime}
          title="About Time"
        />
      </div>
      <div className="container">
        <Movie
          image={whisperOfTheHeart}
          title="Whisper of the Heart"
        />
        <Movie
          image={whenHarryMetSally}
          title="When Harry Met Sally"
        />
        <Movie
          image={parasite}
          title="Parasite"
        />
      </div>
    </div>
  );
}

export default App;
