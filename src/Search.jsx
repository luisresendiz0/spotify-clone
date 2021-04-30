import { useEffect, useRef, useState } from "react";
import randomColor from "randomcolor";
import styles from "./Search.module.css";
import Song from "./Song";

const Search = () => {
  const queryRef = useRef(null);
  const [songs, setSongs] = useState([]);

  const search = async () => {
    setSongs([]);
    const queryString = queryRef.current.value;
    let baseURL = "https://api.napster.com";
    let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let query = `query=${queryString}`;
    let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

    let response = await fetch(url);
    let json = await response.json();
    setSongs(json.search.data.tracks.map((rsong) => ({ ...rsong, colorBg: randomColor() })));
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Search</h1>
      <input ref={queryRef} className={styles.input} defaultValue="the weeknd" />
      <button className={styles.btn} onClick={search}>
        search
      </button>
      <section className={styles.songsContainer}>
        {songs.map((song, index) => (
          <Song key={index} song={song} />
        ))}
      </section>
    </div>
  );
};

export default Search;
