import { useContext } from "react";
import { currentSongContext } from "./context/currentSongContext";
import { useFavorites } from "./context/favoritesContext";
import styles from "./Song.module.css";

const Song = ({ song }) => {
  const { setCurrentSong } = useContext(currentSongContext);
  const { favoriteSongs, setFavoriteSongs } = useFavorites();

  const addToFavoriteSongs = () => {
    if (!favoriteSongs.includes(song)) {
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  const removeFromFavorites = () => {
    setFavoriteSongs(favoriteSongs.filter((fs) => fs.id !== song.id));
  };

  return (
    <div
      className={styles.song}
      style={{
        backgroundColor: song.colorBg,
      }}
    >
      <h3>{song.name}</h3>
      <button onClick={() => setCurrentSong(song)}>play</button>
      <button onClick={addToFavoriteSongs}>favorite</button>
      <button onClick={removeFromFavorites}>remove</button>
    </div>
  );
};

export default Song;
