import { useState } from "react";
import ListSongs from "../ListSongs/ListSongs";

export interface SongData {
  songTitle: string;
  url: string;
}

const Container = () => {
  const [songTitle, setSongTitle] = useState("");
  const [url, setUrl] = useState("");
  const [songs, setSongs] = useState<SongData[]>([]);

  const handleSong = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong = { songTitle, url };
    setSongs((prevSongs) => [...prevSongs, newSong]);

    setSongTitle("");
    setUrl("");
  };

  return (

    //---------------------Submit Song---------------------//
    <div className="flex justify-start p-10 mt-33 ">
    <form className="border border-black p-5 max-w-100 w-full h-full bg-white rounded-lg shadow-lg" onSubmit={handleSong}>
      <div className="mb-4">
        <label htmlFor="songName" className="block text-left mb-2">Song Name</label>
        <input type="text" id="songName" placeholder="Enter Song Name" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4"> 
        <label htmlFor="url" className="block text-left mb-2">URL</label>
        <input type="text" id="url" placeholder="Enter URL" className="w-full p-2 border rounded" />
      </div>
      <div className="flex justify-center w-full mt-4">
      <button type="submit" className="flex justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >Submit</button>
      </div>
    </form>
    <ListSongs song={songs} />
  </div>
  )
}

export default Container;
