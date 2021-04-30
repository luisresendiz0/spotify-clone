import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

const initialState = JSON.parse(localStorage.getItem("favorites") || "[]");

export const FavoritesProvider = ({ children }) => {
  const [favoriteSongs, setFavoriteSongs] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteSongs));
  }, [favoriteSongs]);

  return (
    <FavoritesContext.Provider value={{ favoriteSongs, setFavoriteSongs }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
