import randomColor from 'randomcolor';
import styles from './Search.module.css';

const Song = ({ song, setCurrentSong = () => {}, favoriteSongs, setFavoriteSongs }) => {
	const addToFavoriteSongs = () => {
		console.log(song.id);
		const exist = favoriteSongs.includes(song);

		if (!exist) {
			setFavoriteSongs([ ...favoriteSongs, song ]);
		}
	};

	return (
		<div
			className={styles.song}
			style={{
				backgroundColor: randomColor()
			}}
		>
			<h3>
				{song.name} - {song.albumName}
			</h3>
			<button onClick={() => setCurrentSong(song)}>play</button>
			<button onClick={addToFavoriteSongs}>favorite</button>
		</div>
	);
};

export default Song;
