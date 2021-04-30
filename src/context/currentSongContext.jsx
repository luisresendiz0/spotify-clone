import { createContext, useEffect, useState } from "react";

export const currentSongContext = createContext();

const initialState = JSON.parse(
  localStorage.getItem("current") || '{ "previewURL": "", "name": "" }'
);

export const CurrentSongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("current", JSON.stringify(currentSong));
  }, [currentSong]);

  return (
    <currentSongContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </currentSongContext.Provider>
  );
};
