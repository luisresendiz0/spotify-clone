import { useEffect, useRef, useState } from 'react';
import Reproductor from './Reproductor';
import styles from './Search.module.css';
import Song from './Song';

const Search = ({ favoriteSongs, setFavoriteSongs }) => {
	const queryRef = useRef(null);
	const [ songs, setSongs ] = useState([]);
	const [ currentSong, setCurrentSong ] = useState(null);

	const search = async () => {
		setSongs([]);
		const queryString = queryRef.current.value;
		let baseURL = 'https://api.napster.com';
		let key = 'apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';
		let query = `query=${queryString}`;
		let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

		let response = await fetch(url);
		let json = await response.json();
		setSongs(json.search.data.tracks);
	};

	useEffect(
		() => {
			console.log(songs);
		},
		[ songs ]
	);

	return (
		<div className="App">
			<input ref={queryRef} />
			<button onClick={search}>search</button>
			<section className={styles.songsContainer}>
				{songs.map((song, index) => (
					<Song
						key={index}
						favoriteSongs={favoriteSongs}
						setFavoriteSongs={setFavoriteSongs}
						song={song}
						setCurrentSong={setCurrentSong}
					/>
				))}
			</section>
			{currentSong && (
				<Reproductor source={currentSong.previewURL} name={currentSong.name} album={currentSong.albumName} />
			)}
		</div>
	);
};

export default Search;
