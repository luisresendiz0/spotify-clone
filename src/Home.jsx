import Song from './Song';

const Home = ({ favoriteSongs }) => {
	return (
		<main>
			<h1>Favorite Songs</h1>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '1rem'
				}}
			>
				{favoriteSongs.length > 0 ? (
					favoriteSongs.map((song) => <Song song={song} />)
				) : (
					<h4>Empty favorite song list</h4>
				)}
			</section>
		</main>
	);
};

export default Home;
