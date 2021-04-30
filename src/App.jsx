import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import Favorites from "./Favorites";
import styles from "./App.module.css";
import { CurrentSongProvider } from "./context/currentSongContext";
import Reproductor from "./Reproductor";
import { FavoritesProvider } from "./context/favoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <CurrentSongProvider>
        <Router>
          <nav className={styles.nav}>
            <Link to="/favorites" className={styles.link}>
              Favorites
            </Link>
            <Link className={styles.link} to="/search">
              Search
            </Link>
          </nav>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
        <Reproductor />
      </CurrentSongProvider>
    </FavoritesProvider>
  );
};

export default App;
