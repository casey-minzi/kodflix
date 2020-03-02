import React from 'react';
import './App.css';
import moviePoster from './a_lot_like_love_poster.jpg';

function App() {
  return (
    <div className ='App'>
      <h1 className = 'movie_title'> A Lot Like Love</h1>
      <div>
        <img src = {moviePoster} alt = 'A Lot Like Love' />
      </div>
    </div>

  );
}

export default App;
