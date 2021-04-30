import Song from "./Song";
import styles from "./Favorites.module.css";
import { useFavorites } from "./context/favoritesContext";

const Favorites = () => {
  const { favoriteSongs } = useFavorites();

  return (
    <main className={styles.container}>
      <h1 style={{ margin: "2rem 0" }}>Favorite Songs</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {favoriteSongs.length > 0 ? (
          favoriteSongs.map((song) => <Song key={song.id} song={song} />)
        ) : (
          <h4>Empty favorite song list</h4>
        )}
      </section>
    </main>
  );
};

export default Favorites;
