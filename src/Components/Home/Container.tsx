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
    <div className="flex flex-col lg:flex-row justify-start gap-12 p-6 mt-10 bg-gradient-to-r from-blue-50 to-blue-200">
      {/* Song Input Form */}
      <form
        onSubmit={handleSong}
        className="border border-gray-300 p-8 w-full max-w-md bg-white rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add a New Song
        </h2>

        <div className="mb-6">
          <label
            htmlFor="songName"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Song Name
          </label>
          <input
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            type="text"
            id="songName"
            placeholder="Enter Song Name"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Song URL
          </label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            id="url"
            placeholder="Enter Song URL"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-center w-full mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Song List Display */}
      <ListSongs song={songs} />
    </div>
  );
};

export default Container;
