import { useAudio } from 'react-use';
import styles from './Reproductor.module.css';

const Reproductor = ({ source, name, album }) => {
	const [ audio, state, controls ] = useAudio({
		src: source,
		autoPlay: true
	});

	return (
		<div className={styles.reproductor}>
			{audio}
			<h2>
				{name} - {album}
			</h2>
			<h3>time: {state.time}</h3>
			<div>
				<input
					type="range"
					value={state.volume}
					onChange={(e) => controls.volume(Number(e.target.value))}
					min="0.0"
					max="1.0"
					step="0.05"
				/>
				<button onClick={state.paused ? controls.play : controls.pause}>
					{state.paused ? 'Play' : 'Pause'}
				</button>
			</div>
		</div>
	);
};

export default Reproductor;
