import React from 'react';
import Movie from '../Movie/Movie';
import aLotLikeLove from './Images/a_lot_like_love_poster.jpg';
import prideAndPrejudice from './Images/pride_and_prejudice_poster.jpg';
import aboutTime from './Images/about_time_poster.jpg';
import whisperOfTheHeart from './Images/whisper_of_the_heart_poster.jpg';
import whenHarryMetSally from './Images/when_harry_met_sally_poster.jpg';
import parasite from './Images/parasite_poster.jpg';

export default function Gallery() {
	return (
		<div className="Movie">
			<div className="container">
				{Gallery_get().map(({title, image, id}) => (
					<Movie
						title={title}
						image={image}
						id={id}
					/>
				))
				}
			</div>
		</div>
	)
	function Gallery_get() {
		return [
			{ image: aLotLikeLove, title: 'A Lot Like Love', id: 'a_lot_like_love' },
			{ image: prideAndPrejudice, title: 'Pride and Prejudice', id: 'pride_and_prejudice' },
			{ image: aboutTime, title: 'About Time', id: 'about_time' },
			{ image: whisperOfTheHeart, title: 'Whisper of the Heart', id: 'whisper_of_the_heart' },
			{ image: whenHarryMetSally, title: 'When Harry Met Sally', id: 'when_harry_met_sally' },
			{ image: parasite, title: 'Parasite', id: 'parasite' },
		];
	}
}
